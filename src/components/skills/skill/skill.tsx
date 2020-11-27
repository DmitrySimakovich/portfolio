import React, {FC} from 'react';
import style from './skill.module.css';

type propsType = {
    title: string
    description: string
}

const Skill : FC<propsType> = ({title,description}) => {
    return <>
       <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span>{description}</span>
       </div>
    </>
}
export default Skill