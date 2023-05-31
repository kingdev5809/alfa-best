import React from "react";
import "./OurTeam.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  Navigation,  } from "swiper";
import {
  aboutSlide1,
  aboutSlide2,
  aboutSlide3,
  aboutSlide4,
  aboutSlide5,
  aboutSlide6,
  aboutSlide7,
  aboutusIcon,
  leftIcon,
  rightIcon,
} from "../../../../../Assets/Index";
import { useTranslation } from "react-i18next";

function OurTeam() {
  const data = [
    {
      name: "Darobov Baxodirmirzo",
      grade: "Бухгалтер",
      img: aboutSlide1,
    },
    {
      name: "Abror Agzamov",
      grade: "Директор",
      img: aboutSlide2,
    },
    {
      name: "Marjona Ganiyeva",
      grade: "Ux Ui designer",
      img: aboutSlide3,
    },
    {
      name: "Pavel Durov",
      grade: "Frontend developer",
      img: aboutSlide4,
    },
    {
      name: "Almaz Baxodirmirzo",
      grade: "Backend developer",
      img: aboutSlide5,
    },
    {
      name: "Malika Baxodirmirzo",
      grade: "Fullstack developer",
      img: aboutSlide6,
    },
    {
      name: "Darobov Baxodirmirzo",
      grade: "Hr manager",
      img: aboutSlide7,
    },
  ];
  const { t } = useTranslation("translation");
  return (
    <div className="our_team container">
      <div className="our_team_title">
        <div className="flex">
          <div>
            <img className="story_title_logo" src={aboutusIcon} alt="icon" />
            <h2>{t("about.ourteam.h1")}</h2>
          </div>
          <div className="navigate-icons">
            <img className="button-prev" src={leftIcon} alt="l" />
            <img className="button-next" src={rightIcon} alt="r" />
          </div>
        </div>
      </div>
      <div className="our_team_slide">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            520: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.grade}>
              <div className="our_team_slide_item">
                <img src={item.img} alt="" />
                <h1>{item.name}</h1>
                <p>{item.grade}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurTeam;
