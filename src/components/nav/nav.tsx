import React, {FC} from 'react';
import style from './nav.module.css';

type propsType = {

}

const NavBar : FC<propsType> = () => {
    return <>
        <div className={style.navbar}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Works</a>
            <a href="">Contact</a>
        </div>
    </>
}
export default NavBar