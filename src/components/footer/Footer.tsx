import React, {FC} from 'react';
import style from './Footer.module.css';
import container_style from "../../common/styles/container.module.css";

type propsType = {

}

const Footer : FC<propsType> = () => {
    return <>
        <div className={style.wrapper}>
            <div className={`${container_style.container} ${style.content}`}>
                <h3>Dmitry Simakovich</h3>
                <div className={style.someBlock}>
                    <div className={style.childSomeBlock}></div>
                    <div className={style.childSomeBlock}></div>
                    <div className={style.childSomeBlock}></div>
                    <div className={style.childSomeBlock}></div>
                </div>
                <span>&#169; 2020 St. Petersburg, All Rights Reserved. </span>
            </div>
        </div>
    </>
}
export default Footer