import React from "react";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { MAIN, PROFILE } from "../../constants/routers";

import styles from "./styles.module.scss";

const Navigation = ({ t }) => {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <NavLink
          exact={true}
          className={styles.link}
          to={MAIN}
          activeClassName={styles.activeLink}
        >
          {t("components.navigation.link1")}
        </NavLink>
      </li>
      <li className={styles.block}>
        <NavLink
          className={styles.link}
          to={PROFILE}
          activeClassName={styles.activeLink}
        >
          {t("components.navigation.link2")}
        </NavLink>
      </li>
    </ul>
  );
};

export default withTranslation()(Navigation);
