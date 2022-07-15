import style from './enter.module.css';
const enter_dark_empty = '/assets/enter_dark_empty.svg'
const enter_dark_full = '/assets/enter_dark_full.svg'
const enter_lite_empty = '/assets/enter_lite_empty.svg'
const enter_lite_full = '/assets/enter_lite_full.svg'
const construction_dark = '/assets/construction_dark.svg'
const construction_lite = '/assets/construction_lite.svg'
import { useState } from 'react';

export default function Enter(props){
    const srcs = {"dark": enter_lite_empty, "lite": enter_dark_empty}
    const hover = {"dark": enter_lite_full, "lite": enter_dark_full}
    const [imgsrc, setImage] = useState(srcs[props.color]);

    return(
        <a className={style.enter} href={props.disable?null:props.href} target="_blank" rel="noreferrer">
            {props.disable?
            <div >
                <img src={props.color=="dark"?construction_lite:construction_dark} style={{width: "100%"}}/>
                <p style={{fontWeight: "500", color: props.color=="dark"?"white":"black", width: "100%", textAlign: "center"}}>ETA: {props.date!==undefined?props.date:"soon"}</p>
            </div>:
            <img style={{width: "100%"}} src={imgsrc} 
            onMouseOver={e => {setImage(hover[props.color]);}} 
            onMouseOut={e => {setImage(srcs[props.color]);}}
            />}
        </a>
    )
}