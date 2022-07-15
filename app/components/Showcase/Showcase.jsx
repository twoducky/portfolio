import style from './showcase.module.css';
import Enter from '../Enter';
import content from '../../data/projects.json';

export default function Showcase(props){
    const bgColor = props.color=="dark"? "var(--dark)" : "var(--lite)";
    const text = props.color=="dark"? "white" : "black";
    const highlight = props.color=="dark"? "var(--dark-pink)" : "var(--lite-pink)";
    const item = props.item

    const heading = content[item].headings;
    const focus = content[item].foci;
    const detail = content[item].details;
    const href = content[item].href;
    const splash = content[item].splash;

    return(
        <div className={style.showcase} style={{backgroundColor: bgColor}}>
            {props.children}
            
            <div className={style.wrapper}>
            
                <div className={style.textblock}>
                <h2 className='project' style={{color: text}}>{props.type}</h2>
                    <p className='heading'  style={{color: text}}>{heading}</p>
                    <p className='focus' style={{color: highlight}}>{focus}</p>
                    <p className='detail' style={{color: text}}>{detail}</p>
                    <Enter color={props.color} disable={props.disable} date={props.date} href={href}/>
                </div>
                <a className={style.splash} href={props.disable?null:href} target="_blank" rel="noreferrer">
                    <img src={splash} />
                </a>
                
            </div>
            
        </div>
    )
}