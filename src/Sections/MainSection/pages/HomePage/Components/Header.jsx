import React from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  PartnersBack,
  cateringBack,
  headerSecBack,
  headerSecLogo,
  householdBack,
} from "../../../../../Assets/Index";
import { Pagination } from "swiper";

function Header() {
  const { t } = useTranslation("translation");
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <>
      <Swiper modules={[Pagination]} slidesPerView={1} pagination={pagination} style={{overflow : "initial"}}>
        <SwiperSlide>
          <div
            className="header_sec"
            style={{ backgroundImage: `url(${headerSecBack})` }}
          >
            <div className="container header_sec_inner">
              <div className="header_sec_inner_content">
                <div className="header_sec_inner_content_logo">
                  <img src={headerSecLogo} alt="logo" />
                </div>
                <h2>{t("home.headersec.h2")}</h2>
                <button>{t("home.headersec.button")}</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="header_sec"
            style={{ backgroundImage: `url(${cateringBack})` }}
          >
            <div className="container header_sec_inner">
              <div className="header_sec_inner_content">
                <div className="header_sec_inner_content_logo">
                  <img src={headerSecLogo} alt="logo" />
                </div>
                <h2>Транспортные перевозки</h2>
                <button>{t("home.headersec.button")}</button>
              </div>{" "}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="header_sec"
            style={{ backgroundImage: `url(${PartnersBack})` }}
          >
            <div className="container header_sec_inner">
              <div className="header_sec_inner_content">
                <div className="header_sec_inner_content_logo">
                  <img src={headerSecLogo} alt="logo" />
                </div>
                <h2>Сервисное и бытовое обслуживание</h2>
                <button>{t("home.headersec.button")}</button>
              </div>{" "}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="header_sec"
            style={{ backgroundImage: `url(${householdBack})` }}
          >
            <div className="container header_sec_inner">
              <div className="header_sec_inner_content">
                <div className="header_sec_inner_content_logo">
                  <img src={headerSecLogo} alt="logo" />
                </div>
                <h2>Инженерно-техническая эксплуатация</h2>
                <button>{t("home.headersec.button")}</button>
              </div>{" "}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Header;
