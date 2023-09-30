'use client'

import styles from "./postDetails.module.css";
import Image from 'next/image';
import { Avatar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LikeButton from './LikeButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from "@mui/material";
import Link from "next/link";
import Router, { useRouter } from 'next/navigation'
import { get_postDetail } from '../lib/page_api';
import { download } from "../lib/storage_api";
import Comment from '../components/Comment';



export default function PostDetails() {

    const router = useRouter();
    const image_path = "5856c597-4500-11ee-9c1c-e446b002bdd8"
    const mime = "image/jpeg"
    const [comments, setComments] = useState([]);

    const { isLoading, data } = useQuery('postDetail', () => get_postDetail(1));
    const { isLoading: isDownloading, data: url } = useQuery('download', () => download(image_path, mime));
    const [likesCounts, setLikesCounts] = useState(0);
    useEffect(() => {
        console.log(data);
        if (data !== undefined) {
            setLikesCounts(data.post.likes);
        }
    }, [data]);
    useEffect(() => {
        console.log(url);
    }, [url]);
    

    // if (data !== undefined) {
        const addComment = (comment) => {
            setComments([comment, ...comments]);
        };


        return (
            <>
                <IconButton onClick={() => router.back()}><ArrowBackIosNewIcon /></IconButton>
                <main className={styles.container}>
                    <div className={styles.user}>
                        <Avatar className={styles.avatar}>K</Avatar>
                        <Typography className={styles.username}>keita</Typography>
                    </div>


                    <Image src={"/sample2.jpg"} layout="responsive" width={640} height={400} alt="test_image" />
                    {/* <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        > */}

                    {/* return (
                                    <SwiperSlide key={src}>
                                        <Image src={src} layout="responsive" width={640} height={400} alt="test_image" />
                                    </SwiperSlide>
                                ) */}

                    {/* </Swiper> */}
                    

                    <div className={styles.postinfo}>
                        <div className={styles.goodbutton}>
                            <div>懐かしイイね</div>
                            <LikeButton onClick={() => setLikesCounts(likesCounts + 1)}/>
                            <div className="{styles.likes}"  style={{color: '#6da7e7', fontWeight: 'bold'}}>{likesCounts}</div>
                        </div>
                       {/* 
                        <div className={styles.date}>
                            {data.post.taken_at}
                        </div>
                        */
                        }
                    </div>
    




                    <div>
                        <Comment comments={comments} addComment={addComment} />
                    </div>

                </main>
            </>
        )
    // }
}