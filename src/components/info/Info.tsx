import React, {FC} from 'react';

import style from './info.module.css';
import container_style from '../../common/styles/container.module.css';

type propsType = {

}

const Information: FC<propsType> = () => {
    return <>
        <div className={style.wrapper}>
            <div className={`${container_style.container} ${style.content}`}>
                <div className={style.description}>
                    <span>Hi There</span>
                    <h1>Dmitry Simakovich</h1>
                    <p>Front-end developer</p>
                </div>

                <div className={style.photo}>

                </div>
            </div>
        </div>
    </>
}
export default Information