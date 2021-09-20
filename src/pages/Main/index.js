import React from "react";
import { withTranslation } from "react-i18next";

import styles from "./styles.module.scss";

const Main = ({ t }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("pages.main.title")}</p>
    </div>
  );
};

export default withTranslation()(Main);
