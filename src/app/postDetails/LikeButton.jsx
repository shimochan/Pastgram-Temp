'use client'

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <Button
      variant={liked ? 'outlined' : 'contained'}
      color="primary"
      startIcon={<ThumbUpIcon />}
      onClick={handleLikeClick}
    >
      
    </Button>
  );
}

export default LikeButton;
