import React from "react";
import { CooperationImage } from "../../../../../Assets/Index";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="contact container">
        <div className="left">
          <div className="inputs">
            <div className="inputs_item">
              <label>{t("cooperationPage.inputs.input1.label")}</label>
              <select name="select">
                <option value={t("cooperationPage.inputs.input1.value1")}>
                  {t("cooperationPage.inputs.input1.value1")}
                </option>
                <option value={t("cooperationPage.inputs.input1.value2")}>
                  {t("cooperationPage.inputs.input1.value2")}
                </option>
                <option value={t("cooperationPage.inputs.input1.value3")}>
                  {t("cooperationPage.inputs.input1.value3")}
                </option>
              </select>
            </div>

            <div className="inputs_item">
              <label>{t("cooperationPage.inputs.input2.label")}</label>
              <input
                type="text"
                placeholder={t("cooperationPage.inputs.input2.placeholder")}
              />
            </div>
            <div className="inputs_item">
              <label>{t("cooperationPage.inputs.input3.label")}</label>
              <input
                type="text"
                placeholder={t("cooperationPage.inputs.input3.placeholder")}
              />
            </div>
            <button>{t("cooperationPage.inputs.button")}</button>
          </div>
        </div>
        <div className="right">
          <img src={CooperationImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
