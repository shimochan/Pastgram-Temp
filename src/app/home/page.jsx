'use client'

import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { get_home } from '../lib/page_api';
import styles from "./home.module.css";
import Link from "next/link";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const images = ['/sample.jpg', '/sample2.jpg', '/sample3.jpg']
const ITEMS = [
  {
    src: "/sample.jpg",
    date: "2015/11/11",
    id: 0
  },
  {
    src: "/sample2.jpg",
    date: "2015/11/11",
    id: 1
  },
  {
    src: "/sample3.jpg",
    date: "2015/11/11",
    id: 2
  },
  {
    src: "/sample4.jpg",
    date: "2015/11/11",
    id: 3
  },
];

export default function Home() {
  const { isLoading, data } = useQuery('home', get_home);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>

      <div className={styles.flameAll}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={styles.flame2}
        >
          {images.map(src => {
            return (
              <SwiperSlide key={src} >
                <div className={styles.flameAll2}>
                <main className={styles.flame}>
                  <div className={styles.grid}>
                    {ITEMS.map((item) => {
                      const index = Math.floor(Math.random() * 8) + 1;
                      return (
                        <Link href='/postDetails' key={item.id}>
                          <div className={styles[`square${index}`]} >
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
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>

  );
}