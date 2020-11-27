import React, {FC} from 'react';
import style from './Contacts.module.css';
import container_style from "../../common/styles/container.module.css";
import Button from "../../common/components/button/Button";

type propsType = {

}

const Contacts: FC<propsType> = () => {
    return <>
        <div className={style.wrapper}>
            <div className={`${container_style.container} ${style.content}`}>
                <h3>Contact</h3>
                <form action="" className={style.form}>
                    <input type="text" placeholder={'Name'}/>
                    <input type="text" placeholder={'Email'}/>
                    <textarea name="" placeholder={'Your message'}></textarea>
                </form>
                <Button title={'Send message'} />
            </div>
        </div>
    </>
}
export default Contacts