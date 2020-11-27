import React, {FC} from 'react';
import style from './works.module.css';
import container_style from "../../common/styles/container.module.css";
import Work from "./work/work";

type propsType = {

}

const Works: FC<propsType> = () => {
    return <>
        <div className={style.wrapper}>
            <div className={`${container_style.container} ${style.content}`}>
                <h2>Works</h2>
                <div className={style.works}>
                    <Work title={'Project1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing '}/>
                    <Work title={'Project2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing '}/>
                    <Work title={'Project3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing '}/>
                </div>
            </div>
        </div>
    </>
}
export default Works