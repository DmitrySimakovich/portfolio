import React, {FC} from 'react';
import style from './Button.module.css';

type propsType = {
    title: string
}

const Button: FC<propsType> = ({title}) => {
    return <>
        <button className={style.button}>{title}</button>
    </>
}
export default Button