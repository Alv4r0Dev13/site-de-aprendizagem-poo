import React, { useEffect, useState } from 'react';

import {
  Container,
  DeleteButton,
  Image,
  ImageButton,
  Input,
  NoImage,
} from './styles';
import { DeleteOutlined, PictureOutlined } from '@ant-design/icons';
import { ImageInputI } from '../../utils/types/components';

const ImageInput: React.FC<ImageInputI> = ({
  imageUrl,
  allowDelete,
  onChange,
}) => {
  const [newImage, setNewImage] = useState<File | null>(null);
  const [url, setUrl] = useState('');

  function handleChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setNewImage(file);
    onChange(file);
  }

  function removeFile() {
    setNewImage(null);
    onChange(null);
  }

  useEffect(() => {
    setUrl(newImage ? URL.createObjectURL(newImage) : '');
  }, [newImage]);

  return (
    <Container>
      {imageUrl || newImage ? (
        <Image src={url || imageUrl} />
      ) : (
        <NoImage>
          <PictureOutlined />
        </NoImage>
      )}
      {newImage && allowDelete ? (
        <DeleteButton
          color="danger"
          onClick={removeFile}
          title="Excluir imagem"
        >
          <DeleteOutlined />
        </DeleteButton>
      ) : null}
      <ImageButton htmlFor="image" title="Enviar imagem">
        <PictureOutlined />
      </ImageButton>
      <Input
        type="file"
        accept="image/*"
        id="image"
        onChange={handleChangeFile}
      />
    </Container>
  );
};

export default ImageInput;
