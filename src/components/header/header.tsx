import React, {FC} from 'react';

import style from './header.module.css';
import container_style from '../../common/styles/container.module.css';

import NavBar from "../nav/nav";

type propsType = {}

const Header: FC<propsType> = () => {
    return <>
        <div className={style.header}>
            <div className={`${container_style.container} ${style.content}`}>
                <NavBar />
            </div>
        </div>
    </>
}
export default Header