"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { data } from "@/data/categoryimages";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "./SectionTitle";
import CategorySliderItem from "./CategorySliderItem";
const Category = () => {
  return (
    <section className="py-20">
      <SectionTitle
        subTitle="Categories"
        title="Discover a multitude of categories at your fingertips."
      />
      <div className=" w-full h-[60vh]">
        <Swiper
          loop={true}
          grabCursor={true}
          speed={750}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CategorySliderItem
                image={item.src}
                name={item.name}
                alt={item.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
