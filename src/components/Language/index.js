import React from "react";
import { withTranslation } from "react-i18next";

import styles from "./styles.module.scss";

const Language = ({ i18n }) => {
  const languages = Object.keys(i18n.options.resources);
  const currentLanguage = i18n.language;
  return (
    <div className={styles.container}>
      {Object.values(i18n.options.resources).map((lang, index) => {
        return (
          <div
            onClick={() => i18n.changeLanguage(languages[index])}
            key={index}
          >
            <p
              className={
                languages[index] === currentLanguage
                  ? styles.activeText
                  : styles.text
              }
            >
              {lang.translation.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default withTranslation()(Language);
