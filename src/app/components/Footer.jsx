import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { HomeOutlined, AddAPhotoOutlined, AccountCircleOutlined } from '@mui/icons-material';
import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.container}>
      <BottomNavigation showLabels className={styles.icon}>
        <BottomNavigationAction style={{color:"black"}} icon={<HomeOutlined />} />
        <BottomNavigationAction style={{color:"black"}} icon={<AddAPhotoOutlined />} />
        <BottomNavigationAction style={{color:"black"}} icon={<AccountCircleOutlined />} />
      </BottomNavigation>

    </footer>
  );
}
