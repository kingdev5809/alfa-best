import React from "react";
import "./Modal.scss";
import { useTranslation } from "react-i18next";
import { ContactModalImg } from "../../../../../Assets/Index";
function Modal({ setModal }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="contact_modal">
        <div className="contact_modal_title">
          <div className="close-modal" onClick={() => setModal(false)}>
            X
          </div>
          <h1>{t("contact.modal.1")}</h1>
          <h2>{t("contact.modal.2")}</h2>
        </div>
        <img src={ContactModalImg} alt="" />
      </div>
      <div className="w-screen" onClick={() => setModal(false)}></div>
    </>
  );
}

export default Modal;
