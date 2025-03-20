import React, { useEffect, useState } from 'react';

import {
  Container,
  Content,
  DescriptionInput,
  Form,
  NameInput,
  SendButton,
  Title,
} from './styles';
import { useQuery } from '../../hooks/useQuery';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageInput from '../../components/ImageInput';
import { Course } from '../../utils/types/entities';
import api from '../../services/api';
import { useUser } from '../../context/user';
import { CourseType } from '../../utils/types/enum';

const ManageCourse: React.FC = () => {
  const { user } = useUser();
  const query = useQuery();
  const [action, setAction] = useState('');
  const { state } = useLocation();
  const course = state?.course as Course | null;
  const navigate = useNavigate();

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [name, setName] = useState(course?.name || '');
  const [description, setDescription] = useState(course?.description || '');
  const [slug, setSlug] = useState('');

  async function handleEditCourse() {
    let thumbnailUrl;
    if (thumbnail) {
      const formData = new FormData();
      formData.append('image', thumbnail);
      let replace = '';
      if (course?.thumbnail) {
        const split = course.thumbnail.split('/');
        replace = split[split.length - 1];
      }
      thumbnailUrl = await api
        .post(`image/upload?${replace ? `replace=${replace}` : ''}`, formData)
        .then(
          resp => resp.data.url,
          reason => {
            console.log(reason);
            alert('Não foi possível enviar a imagem...');
            return undefined;
          },
        )
        .catch(reason => {
          console.log(reason);
          alert('Não foi possível enviar a imagem...');
          return undefined;
        });
    }

    if (!course) return;
    if (
      name === course.name &&
      description === course.description &&
      !thumbnailUrl
    )
      return;
    await api
      .patch(`/course/${course.id}`, {
        name: name !== course.name ? name : undefined,
        description:
          description !== course.description ? description : undefined,
        thumbnail: thumbnailUrl,
      })
      .then(
        resp => {
          alert('Dados do curso alterados com sucesso!');
          navigate(`/course/${course.id}?tab=about`, {
            state: { ...state, course: resp.data },
          });
        },
        reason => {
          console.log(reason);
          alert('Algo deu errado...');
        },
      )
      .catch(reason => {
        console.log(reason);
        alert('Algo deu errado...');
      });
  }

  async function handleCreateCourse() {
    const empty = checkErrors();
    if (empty.length) {
      alert(`Os seguintes campos são obrigatórios:\n${empty.join(', ')}`);
      return;
    }

    let thumbnailUrl;
    if (thumbnail) {
      const formData = new FormData();
      formData.append('image', thumbnail);
      thumbnailUrl = await api
        .post(`image/upload`, formData)
        .then(
          resp => resp.data.url,
          reason => {
            console.log(reason);
            alert('Não foi possível enviar a imagem...');
            return undefined;
          },
        )
        .catch(reason => {
          console.log(reason);
          alert('Não foi possível enviar a imagem...');
          return undefined;
        });
    }

    await api
      .post(`/course/`, {
        name,
        slug,
        description,
        type: CourseType.MAIN,
        thumbnail: thumbnailUrl,
        author: user!.id,
      })
      .then(
        resp => {
          alert('Curso criado com sucesso!');
          navigate(`/course/${resp.data.id}?tab=about`, {
            state: { ...state, course: resp.data },
          });
        },
        reason => {
          console.log(reason);
          alert('Algo deu errado...');
        },
      )
      .catch(reason => {
        console.log(reason);
        alert('Algo deu errado...');
      });
  }

  function checkErrors() {
    const empty = [];
    if (!name) empty.push('Nome do curso');
    if (!description) empty.push('Descrição');
    return empty;
  }

  useEffect(() => {
    const act = query.get('action');
    if (!act) {
      navigate(-1);
      return;
    }

    switch (act) {
      case 'create':
        setAction('Novo');
        break;
      case 'edit':
        setAction('Editar');
        break;
      default:
        navigate(-1);
    }
  }, []);

  useEffect(() => {
    if (action === 'edit' && !course) navigate(-1);
  }, [action]);

  useEffect(() => {
    setSlug(
      name
        .trim()
        .toLocaleLowerCase()
        .normalize()
        .replace(/[^a-z\d\s]/gi, '')
        .replace(' ', '-'),
    );
  }, [name]);

  return (
    <Container>
      <Content>
        <Title>{action} curso</Title>
        <Form>
          <ImageInput
            imageUrl={course?.thumbnail}
            onChange={img => setThumbnail(img)}
            allowDelete
          />
          <NameInput
            label="Nome do curso"
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={100}
            showCharCount
          />
          <DescriptionInput
            label="Descrição"
            placeholder="Escreva a descrição aqui..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {action === 'Novo' ? (
            <SendButton onClick={handleCreateCourse}>Criar curso</SendButton>
          ) : (
            <SendButton onClick={handleEditCourse}>Salvar</SendButton>
          )}
        </Form>
      </Content>
    </Container>
  );
};

export default ManageCourse;
