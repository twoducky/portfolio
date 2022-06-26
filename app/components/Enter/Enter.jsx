import style from './enter.module.css';
import Image from 'next/image';
import enter_dark_empty from '../../public/assets/enter_dark_empty.svg'
import enter_dark_full from '../../public/assets/enter_dark_full.svg'
import enter_lite_empty from '../../public/assets/enter_lite_empty.svg'
import enter_lite_full from '../../public/assets/enter_lite_full.svg'
import construction_dark from '../../public/assets/construction_dark.svg'
import construction_lite from '../../public/assets/construction_lite.svg'
import { useState } from 'react';

export default function Enter(props){
    const srcs = {"dark": enter_lite_empty, "lite": enter_dark_empty}
    const hover = {"dark": enter_lite_full, "lite": enter_dark_full}
    const [imgsrc, setImage] = useState(srcs[props.color]);

    return(
        <a className={style.enter} href={props.disable?null:"#"} target="_blank">
            {props.disable?
            <div >
                <Image src={props.color=="dark"?construction_lite:construction_dark}/>
                <p style={{fontWeight: "500", color: props.color=="dark"?"white":"black", width: "100%", textAlign: "center"}}>ETA: {props.date!==undefined?props.date:"soon"}</p>
            </div>:
            <Image src={imgsrc} 
            onMouseOver={e => {setImage(hover[props.color]);}} 
            onMouseOut={e => {setImage(srcs[props.color]);}}
            />}
        </a>
    )
}