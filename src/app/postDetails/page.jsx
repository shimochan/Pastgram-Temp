'use client'

import styles from "./postDetails.module.css";
import Image from 'next/image';
import { Avatar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import LikeButton from './LikeButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { get_postDetail } from '../lib/page';

const images = ['/sample.jpg', '/sample2.jpg', '/sample3.jpg']

export default function PostDetails() {
    const { isLoading, data } = useQuery('postDetail', () => get_postDetail(1));
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <main className={styles.container}>
            <div className={styles.user}>
                <Avatar className={styles.avatar}>H</Avatar>
                <Typography className={styles.username}>Username</Typography>
            </div>
            <div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {images.map(src => {
                        return (
                            <SwiperSlide key={src}>
                                <Image src={src} layout="responsive" width={640} height={400} alt="test_image"  />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            
            <div className={styles.goodbutton}>
                懐かしイイね
                <LikeButton />
            </div>
        </main>
    )
}