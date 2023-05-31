import React from "react";
import "./PartnerCompany.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  aboutPartnerSlide1,
  aboutPartnerSlide2,
  aboutPartnerSlide3,
} from "../../../../../Assets/Index";
function PartnerCompany() {
  const data = [
    {
      img: aboutPartnerSlide1,
      id: "1",
    },
    {
      img: aboutPartnerSlide2,
      id: "2",
    },
    {
      img: aboutPartnerSlide3,
      id: "3",
    },
    {
      img: aboutPartnerSlide1,
      id: "4",
    },
    {
      img: aboutPartnerSlide2,
      id: "5",
    },
    {
      img: aboutPartnerSlide3,
      id: "6",
    },
    {
      img: aboutPartnerSlide1,
      id: "7",
    },
    {
      img: aboutPartnerSlide2,
      id: "8",
    },
    {
      img: aboutPartnerSlide3,
      id: "9",
    },
  ];
  return (
    <div className="partner_company container">
      <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={5}>
        {data.map((item) => (
          <SwiperSlide style={{ marginRight: 0 }} key={item.id}>
            <img src={item.img} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PartnerCompany;
