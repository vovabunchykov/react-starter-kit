import React from "react";
import { withTranslation } from "react-i18next";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getUser } from "../../store/redux/user/get";
import { selectUserName } from "../../store/selectors";

import styles from "./styles.module.scss";

const Profile = ({ t }) => {
  const data = useSelector(selectUserName, shallowEqual);
  console.log("Render: Profile", data);
  const dispatch = useDispatch();

  const saveDada = () => {
    dispatch(getUser());
  };

  return (
    <div className={styles.container}>
      <p>{t("pages.profile.title")}</p>
      <br />
      <div onClick={saveDada}>Get data</div>
    </div>
  );
};

export default withTranslation()(Profile);
