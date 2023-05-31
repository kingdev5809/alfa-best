import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  PhotoGallerySlide1,
  PhotoGallerySlide2,
  PhotoGallerySlide3,
  aboutusIcon,
  leftIcon,
  rightIcon,
  storyImg,
} from "../../../Assets/Index";
import { useTranslation } from "react-i18next";
import "./Story.scss";
import { Navigation } from "swiper";
function Story() {
  const { t } = useTranslation("translation");

  return (
    <div className="story container ">
      <div className="story_title">
        <div className="flex">
          <div>
            <img className="story_title_logo" src={aboutusIcon} alt="icon" />
            <h2>{t("story.h2")}</h2>
          </div>
          <div className="navigate-icons">
            <img className="button-prev-story" src={leftIcon} alt="l" />
            <img className="button-next-story" src={rightIcon} alt="r" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-story",
          prevEl: ".button-prev-story",
        }}
      >
        <SwiperSlide>
          <div className="story_content">
            <img src={storyImg} alt="img" />
            <div className="story_content_inner">
              <h1>2018</h1>
              <p>{t("story.p")}</p>
              <p>{t("story.p2")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="story_content">
            <img src={PhotoGallerySlide2} alt="img" />
            <div className="story_content_inner">
              <h1>2020</h1>
              <p>{t("story.p")}</p>
              <p>{t("story.p2")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="story_content">
            <img src={PhotoGallerySlide3} alt="img" />
            <div className="story_content_inner">
              <h1>2021</h1>
              <p>{t("story.p")}</p>
              <p>{t("story.p2")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="story_content">
            <img src={PhotoGallerySlide3} alt="img" />
            <div className="story_content_inner">
              <h1>2022</h1>
              <p>{t("story.p")}</p>
              <p>{t("story.p2")}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="story_footer">
        <h1>2017</h1>
        <h1 className="active">2018</h1>
        <h1>2020</h1>
        <h1>2021</h1>
        <h1>2022</h1>
      </div> */}
    </div>
  );
}

export default Story;
