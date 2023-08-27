'use client'

import Image from 'next/image';
import { Container } from '@mui/material';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import styles from './photo_select.module.css';

const PhotoSelect = ({ setImage, url }) => {
  const handleImageSelect = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <Container className={styles.container} maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <label className={styles.button}>
        <DriveFolderUploadOutlinedIcon className={styles.add_icon}/>
        <input
          type="file"
          accept="image/*"
          style={{display: 'none'}}
          onChange={handleImageSelect}
        />
      </label>
      {url && (
        <Image src={url} layout="responsive" width={640} height={400} alt="test_image" />
      )}
    </Container>
  );
};

export default PhotoSelect;