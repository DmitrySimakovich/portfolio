import React, {FC} from 'react';

import style from './skills.module.css';
import container_style from "../../common/styles/container.module.css";
import Skill from "./skill/skill";

type propsType = {

}

const Skills : FC<propsType> = () => {
    return <>
        <div className={style.wrapper}>
            <div className={`${container_style.container} ${style.content}`}>
                <h2>My skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...' }/>
                    <Skill title={'Html&Css'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...' } />
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...' }/>
                </div>
            </div>
        </div>
    </>
}
export default Skills