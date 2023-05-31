import React from "react";
import "./Footer.scss";
import {
  HeaderLogo,
  facebookIcon,
  instagramIcon,
  telegramIcon,
} from "../../Assets/Index";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation("translation");

  return (
    <div className="footer ">
      <div className="container">
        <div className="footer_content ">
          <div className="left">
            <img className="logo" src={HeaderLogo} alt="logo" />
            <ul className="links-1">
              <li>
                <a href="/#">{t("about_company")}</a>
              </li>
              <li>
                <a href="/#"> {t("career")} </a>
              </li>
              <li>
                <a href="/#">{t("purchases")}</a>
              </li>
              <li>
                <a href="/#">{t("cooperation")}</a>
              </li>
              <li>
                <a href="/#">{t("contacts")}</a>
              </li>
            </ul>
            <ul className="links-2">
              <li>
                <a href="#/">{t("engineering")}</a>
              </li>
              <li>
                <a href="#/">{t("service")}</a>
              </li>
              <li>
                <a href="#/">{t("corporate")}</a>
              </li>
              <li>
                <a href="#/">{t("transportation")}</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <h4>{t("footer.h4")}</h4>
            <div className="icons">
              <img src={telegramIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={facebookIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="footer_content_2">
          <div className="left">
            <h1>Developed</h1>
            <h3>
              <span>By</span> KING
            </h3>
          </div>
          <div className="right">
            <p>{t('footer.p1')}</p>
            <p>{t('footer.p2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
