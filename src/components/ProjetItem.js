import React from "react";
import style from "../section/ProjetSection.module.css";

const ProjetItem = (props) => {
    return (
        <div className={style["left-item-projet"]}>
            <div className={style["item-projet-title"]}>
                <h3>{props.projetTitle}</h3>
            </div>
            <div className={style["item-projet-date"]}>
                <p>{props.projetDate}</p>
            </div>
            <div className={style["item-projet-text"]}>
                <p>{props.projetText}</p>
            </div>
        </div>
    )
}
export default ProjetItem;