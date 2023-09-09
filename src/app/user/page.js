'use client'

import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Container, Grid, Avatar, Typography, Button, Card, CardMedia } from '@mui/material';
import { get_profile } from '../lib/page_api';
import styles from './style.module.css';
import Link from "next/link";
import { logo } from '../lib/font';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { IconButton } from "@mui/material";
import Image from 'next/image';



function ProfilePage() {
    const { isLoading, data } = useQuery('user', () => get_profile(1));
    useEffect(() => {
        console.log(data);
    }, [data]);
    const ITEMS = [
        {
          src: "/sample.jpg",
          date: "2015/11/11",
          id: 0
        },]
    return (
        <>
            
            <Container className={styles.profile}>
              <div className={styles.logo}>
                <div className={[logo.className, styles.logo].join(' ')} variant="h5" align="center">
                    Pastgram
                </div>
              </div>
              <Link href="/user/authentication">
                <IconButton className={styles.alart}><NotificationsOutlinedIcon/></IconButton>
              </Link>    
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

                <main className={styles.flame}>
      <div className={styles.grid}>
      {ITEMS.map((item) => {
        const index = Math.floor(Math.random() * 8) + 1;
        return (
          <Link href='/postDetails' key={item.id}>
            <div  className={styles[`square${index}`]} >
              <Image src="/pin.png" alt="pin" width="40" height="40" className={styles.pin} />
              <Image src={item.src} alt="photo" width="0" height="0" sizes="100vw" className={styles.photo} />
              <div className={styles.date}>
                {item.date}
              </div>
            </div>
          </Link>
        );
      })}
      </div>

    </main>
                <div className={styles.list}></div>
            </Container>
        </>
    );
}

export default ProfilePage;
