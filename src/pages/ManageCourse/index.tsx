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

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSendCourse() {
    // console.log(user);
    let thumbnailUrl;
    if (thumbnail) {
      console.log(thumbnail);
      const formData = new FormData();
      formData.append('image', thumbnail);
      thumbnailUrl = api
        .post('image/upload', formData, {
          headers: { Authorization: `Bearer ${user?.token}` },
        })
        .then(
          resp => {
            console.log(resp);
            return undefined;
          },
          reason => {
            console.log(reason);
            return undefined;
          },
        )
        .catch(reason => {
          console.log(reason);
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
        thumbnailUrl,
      })
      .then(
        () => {
          console.log('foi');
          setIsSuccess(true);
        },
        reason => {
          console.log(reason);
        },
      )
      .catch(reason => {
        console.log(reason);
      });
  }

  useEffect(() => {
    (async () => {
      if (!course?.thumbnailUrl) return;
      await fetch(course.thumbnailUrl).then(resp => {
        setThumbnail(thumbnail);
      });
    })();
  }, []);

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
    if (action === 'Novo' && !course) navigate(-1);
  }, [action]);

  return (
    <Container>
      <Content>
        <Title>{action} curso</Title>
        <Form>
          <ImageInput
            imageUrl={course?.thumbnailUrl}
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
            placeholder="Escreva a descrição aqui..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <SendButton onClick={handleSendCourse}>
            {action === 'Novo' ? 'Criar curso' : 'Salvar'}
          </SendButton>
        </Form>
      </Content>
    </Container>
  );
};

export default ManageCourse;
