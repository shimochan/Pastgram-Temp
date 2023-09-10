'use client'

import { useMemo } from 'react';
import { useQueries, useQuery } from 'react-query';
import { get_home } from '../lib/page_api';
import styles from "./home.module.css";
import Link from "next/link";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { download } from '../lib/storage_api';

export default function Home() {
  const { isLoading, data } = useQuery('home', get_home);
  const thumnails = useMemo(() => data?.thumnails, [data]);

  const downloads = useQueries((thumnails || []).map(({ image_path }) => (
    {
      queryKey: ['image', image_path],
      queryFn: () => download(image_path)
    }
  )));

  if (isLoading || !thumnails) {
    return (<pre>Loading...</pre>);
  }

  const zipped = Array.from((function* () {
    for (let i = 0; i < thumnails.length; i++) {
      let { isLoading: isDownloading, data: url } = downloads[i];
      let obj = {
        ...thumnails[i],
        isDownloading,
        url,
      };
      yield obj;
    }
  })());

  const pagenation = (function* (number) {
    for (let i = 0; i < thumnails.length; i += number) {
      yield zipped.slice(i, i + number);
    }
  });

  return (
    <>
      <div className={styles.flame2}>
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className={styles.flame2}
        >
          {Array.from(pagenation(4)).map((page, index) => {
            return (
              <SwiperSlide key={index}>
                <main className={styles.flame}>
                  <div className={styles.grid}>
                    {page.map(({ id, taken_at, isDownloading, url }) => {
                      const index = Math.floor(Math.random() * 8) + 1;
                      return (
                        <Link href='/postDetails' key={id}>
                          <div  className={styles[`square${index}`]} >
                            <Image src="/pin.png" alt="pin" width="40" height="40" className={styles.pin} />
                            {(!isDownloading && url) ? (
                              <Image src={url} alt="photo" width="0" height="0" sizes="100vw" className={styles.photo} />
                            ) : (
                              <div width="0" height="0" sizes="100vw" className={styles.photo}>
                                Loading
                              </div>
                            )}
                            <div className={styles.date}>
                              {taken_at}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </main>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
  </>
  );
}