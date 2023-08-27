'use client'

import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Container, Grid, Avatar, Typography, Button, Card, CardMedia } from '@mui/material';
import { get_profile } from '../lib/page_api';
import styles from './style.module.css';
import Link from "next/link";


function ProfilePage() {
  const { isLoading, data } = useQuery('user', () => get_profile(1));
  useEffect(() => {
      console.log(data);
  }, [data]);

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
            <Button className={styles.edit} variant="contained" color="primary">プロフィール編集</Button>
            
            <Button className={styles.search} variant="contained" color="primary">
                <Link href="/user/search" >
                ユーザー検索
                </Link>
            </Button>
            </div>
            <div className={styles.list}></div>
        </Container>
    </>
  );
}

export default ProfilePage;
