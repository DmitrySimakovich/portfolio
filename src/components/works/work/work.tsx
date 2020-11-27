import React, {FC} from 'react';
import style from './work.module.css';
import Button from "../../../common/components/button/Button";

type propsType = {
    title: string
    description: string
}

const Work: FC<propsType> = ({title, description}) => {
    return <>
        <div className={style.container}>
            <div className={style.image}>
                <Button title={'View'}/>
            </div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    </>
}
export default Work