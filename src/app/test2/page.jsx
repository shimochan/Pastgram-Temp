"use client"
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Button, Container, Paper, Typography } from '@mui/material';

const IndexPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const url = useMemo(() => {
    if (selectedImage) {
      return URL.createObjectURL(selectedImage);
    }
    return null;
  }, [selectedImage]);

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      console.log('Image uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageSelect = (event) => {
    console.log(event.target.files)
    setSelectedImage(event.target.files[0]);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem' }}>
        <Typography variant="h5" gutterBottom>
          Image Upload
        </Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          style={{ marginBottom: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleImageUpload}
          disabled={!selectedImage}
        >
          Upload
        </Button>
      </Paper>
      {url && (
        <Image src={url} layout="responsive" width={640} height={400} alt="test_image" />
      )}
    </Container>
  );
};

export default IndexPage;