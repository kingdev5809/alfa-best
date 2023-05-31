import React from "react";
import "./PhotoGallery.scss";
import {
  PhotoGallerySlide1,
  PhotoGallerySlide2,
  PhotoGallerySlide3,
  PhotoGallerySlide4,
  PhotoGallerySlide5,
  PhotoGallerySlide6,
  PhotoGallerySlide7,
  PhotoGallerySlide8,
  aboutusIcon,
  leftIcon,
  rightIcon,
} from "../../Assets/Index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useTranslation } from "react-i18next";
import { Navigation } from "swiper";
function PhotoGallery() {
  const { t } = useTranslation("translation");
  const data = [
    { image: PhotoGallerySlide1, id: 1 },
    { image: PhotoGallerySlide2, id: 2 },
    { image: PhotoGallerySlide3, id: 3 },
    { image: PhotoGallerySlide4, id: 4 },
    { image: PhotoGallerySlide5, id: 5 },
    { image: PhotoGallerySlide6, id: 6 },
    { image: PhotoGallerySlide7, id: 7 },
    { image: PhotoGallerySlide8, id: 8 },
  ];
  return (
    <div className="photo_gallery container">
      <div className="photo_gallery_title">
        <div className="flex">
          <div>
            <img className="story_title_logo" src={aboutusIcon} alt="icon" />
            <h2>{t("photogallery.h1")}</h2>
          </div>
          <div className="navigate-icons">
            <img className="button-prev_galery" src={leftIcon} alt="l" />
            <img className="button-next_galery" src={rightIcon} alt="r" />
          </div>
        </div>
      </div>
      <div className="photo_gallery_slide">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            520: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".button-next_galery",
            prevEl: ".button-prev_galery",
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PhotoGallery;
