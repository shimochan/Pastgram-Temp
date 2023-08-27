"use client"
import React, { useState } from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';
import axios from 'axios';

const IndexPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageSelect = (event) => {
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
    </Container>
  );
};

export default IndexPage;