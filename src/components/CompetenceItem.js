import React from "react";
import style from "../section/CompetenceSection.module.css";

const CompetenceItem = (props) => {
    return (
        <div className={style["competence-item"]}>
            <img alt={props.competenceAlt} className={style["competence-img"]} src={props.competenceImage}/>
            <p className={style["competence-item-title"]}>{props.competenceNom}</p>
        </div>
    )
}
export default CompetenceItem;