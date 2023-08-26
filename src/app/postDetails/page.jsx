

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from "./postDetails.module.css";
import Image from 'next/image';
import { Avatar, Typography } from '@mui/material';
import React from 'react';
import LikeButton from './LikeButton';

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <div className={styles.user}>
                    <Avatar className={styles.avatar}>H</Avatar>
                    <Typography className={styles.username}>Username</Typography>
                </div>
                <Image src="/sample.jpg" alt="photo" width="0" height="0" sizes="100vw" className={styles.image} />
                <div className={styles.goodbutton}>
                    懐かしイイね
                        <LikeButton />
                </div>
            </main>
            <Footer />
        </>
    )
}