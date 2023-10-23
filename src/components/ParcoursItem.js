import React from "react";
import style from "../section/ParcoursSection.module.css";

const ParcoursItem = (props) => {
    return (
        <div className={style["parcours-item"]}>
            <div className={style["item-parcours-order"]}>
                <p>{props.parcoursNumber}</p>
            </div>
            <div className={style["item-parcours-title"]}>
                <h3>{props.parcoursTitle}</h3>
            </div>
            <div className={style["item-parcours-date"]}>
                <p>{props.parcoursDate}</p>
            </div>
            <div className={style["item-parcours-text"]}>
                <p>{props.parcoursText}</p>
            </div>
        </div>
    );
}
export default ParcoursItem;