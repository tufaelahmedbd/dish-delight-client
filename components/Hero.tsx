"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper";
import { data } from "@/data/sliderimages";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";

const Hero = () => {
  return (
    <section className="w-full h-[80vh]">
      <Swiper
        navigation={true}
        parallax={true}
        speed={700}
        loop={true}
        grabCursor={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <div className=" w-full h-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                height={1920}
                width={1080}
                className=" w-full h-full object-cover"
              />
              <Overlay />
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-[2] space-y-5">
                <h1
                  data-swiper-parallax="-300%"
                  className=" text-8xl font-semibold"
                >
                  {item.headline}
                </h1>
                <p data-swiper-parallax="-500%" className=" text-lg">
                  {item.paragraph}
                </p>
                <div data-swiper-parallax="-600%">
                  <Link href={"/product"} className="btn btn-accent">
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
