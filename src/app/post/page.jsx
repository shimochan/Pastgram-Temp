'use client'

import EXIF from 'exif-js';
import { Grid, Container, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { Footer } from "../components/Footer";
import styles from './style.module.css'; 
import Router, { useRouter } from 'next/navigation'
import PhotoSelect from "./PhotoSelect";
import { useState, useMemo, useEffect } from "react";
import { useQuery } from 'react-query';
import { upload } from '../lib/storage_api';
import { upload_post } from '../lib/page_api';

function getPhotoTakenTimeFromFormData(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
        resolve(null);
        return;
    }

    EXIF.getData(file, function() {
        var tags = EXIF.getAllTags(this);
        resolve(tags);
    });
  });
}

function convertDate(exifDateTime) {
  if (!exifDateTime) {
    return null;
  }

  const [datePart, timePart] = exifDateTime.split(' ');
  const [year, month, day] = datePart.split(':');
  const [hours, minutes, seconds] = timePart.split(':');
  return new Date(year, month - 1, day, hours, minutes, seconds);
}

function formatDate(date) {
  if (!date) {
    return null;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

const Post = () => {
    const router = useRouter();
    const [image, setImage] = useState(null);
    const { isLoading, data } = useQuery(['taken_at', image], () => getPhotoTakenTimeFromFormData(image));
    const url = useMemo(() => {
        if (image) {
            return URL.createObjectURL(image);
        }
        return null;
    }, [image]);
    const date = useMemo(() => {
        if (data) {
          const { DateTime } = data;
          return convertDate(DateTime);
        }
        return null; 
    }, [data]);

    async function handleShare() {
        if (!image || isLoading) {
            return;
        }

        const image_path = await upload(image);
        const post = await upload_post(image_path, formatDate(date))
        console.log("post uploaded");
        console.log(post);
        router.back();
    }

    return ( 
        <Grid className={styles.post} container direction="column">
            <Grid item xs={1}>
                <div className={styles.share}>
                    <IconButton onClick={() => router.back()}><ArrowBackIosNewIcon/></IconButton>
                    <Button onClick={handleShare}>share</Button>
                </div>
            </Grid>
            <Grid item xs={5}>
                <PhotoSelect setImage={setImage} url={url}/>
            </Grid>
            <Grid item xs={1}>
                <Container className={styles.info}>
                    <Typography>日時</Typography>
                    <Typography style={{marginLeft: "1em"}}>{date && formatDate(date)}</Typography>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Post;