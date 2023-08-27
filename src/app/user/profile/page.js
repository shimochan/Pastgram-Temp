import React from 'react';
import { Container, Grid, Avatar, Typography, Button, Card, CardMedia } from '@mui/material';
import styles from './style.module.css';
import { Footer } from '../../components/Footer';
import Link from "next/link";


function ProfilePage() {
  return (
    <>
        <Container className={styles.profile}>
            <Grid className={styles.info} container spacing={3}>
                <Grid item xs={6}>
                    <Avatar className={styles.avatar}>H</Avatar>
                    <Typography variant="h6">Username</Typography>
                </Grid>
                <Grid className={styles.status} item xs={3}>
                    <Link href="/user/follower" className={styles.status}>
                    <Typography className={styles.number}>330</Typography>
                    <Typography className={styles.label}>フォロワー</Typography>
                    </Link>
                </Grid>
                <Grid className={styles.status} item xs={3}>
                    <Link href="/user/following" className={styles.status}>
                    <Typography className={styles.number}>250</Typography>
                    <Typography className={styles.label}>フォロー中</Typography>
                    </Link>
                </Grid>
            </Grid>
            <div className={styles.edisear}>
            </div>
            <div className={styles.list}></div>
        </Container>
        <Footer/>
    </>
  );
}

export default ProfilePage;
