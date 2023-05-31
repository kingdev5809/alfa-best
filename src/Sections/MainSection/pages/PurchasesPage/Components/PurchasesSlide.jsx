import React from "react";
import "./PurchasesSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper";
import {
  PhotoGallerySlide1,
  PhotoGallerySlide2,
  PhotoGallerySlide3,
  PhotoGallerySlide4,
  PhotoGallerySlide5,
  PhotoGallerySlide6,
  PhotoGallerySlide7,
} from "../../../../../Assets/Index";
function PurchasesSlide() {
  const { t } = useTranslation();
  return (
    <div className="slide container">
      <div className="slide_title">
        <h1> {t("purchasesPage.h1")}</h1>
        <p>{t("purchasesPage.p")}</p>
      </div>

      <div className="slide_content">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            520: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src={PhotoGallerySlide1} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoGallerySlide2} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoGallerySlide3} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoGallerySlide4} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoGallerySlide5} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoGallerySlide6} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoGallerySlide7} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <button>Сотрудничество</button>
    </div>
  );
}

export default PurchasesSlide;
