import React, { useState } from "react";
import "./Main.scss";
import { useTranslation } from "react-i18next";
import { ContactImage } from "../../../../../Assets/Index";
import Modal from "./Modal";
function Main() {
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="contact_page container">
        <div className="contact_page_title">
          <h1>{t("contact.title")}</h1>
        </div>
        <div className="contact_page_content">
          <div className="left">
            <div className="form">
              <p>{t("contact.p")}</p>
              <div className="input">
                <label>{t("contact.input1.label")}</label>
                <input
                  type="text"
                  placeholder={t("contact.input1.placeholder")}
                />
              </div>
              <div className="input">
                <label>{t("contact.input1.label")}</label>
                <input
                  type="text"
                  placeholder={t("contact.input1.placeholder")}
                />
              </div>
              <button onClick={() => setModal(!modal)}>
                {t("contact.button")}
              </button>
            </div>
            <div className="info">
              <p>{t("contact.info.tel")}</p>
              <h3>
                <span>+998 99 002 22 23</span> <span>+998 93 222 12 32</span>
              </h3>
              <p>{t("contact.info.address")}</p>
              <h3>{t("contact.info.addressinner")}</h3>
            </div>
          </div>
          <div className="right">
            <img src={ContactImage} alt="" />
          </div>
        </div>
      </div>
      {modal ? <Modal setModal={setModal} /> : ""}
    </>
  );
}

export default Main;
