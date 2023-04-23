import React from "react";
import style from "../section/ExperienceSection.module.css";

const ExperienceItem = (props) => {
    return (
        <div className={style["experience-item"]}>
            <h3 className={style["title-exp"]}>{props.experienceTitle}</h3>
            <p className={style["date-exp"]}>{props.experienceDate}</p>
            <p className={style["text-exp"]}>{props.experienceText}</p>
        </div>
    );
}
export default ExperienceItem;