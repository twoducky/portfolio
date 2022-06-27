import style from './showcase.module.css';
const galactic = '/assets/galacticguilds.svg'
const crowd = '/assets/crowdcheer.svg'
import Enter from '../Enter'

const headings = {"galactic": "Galactic Guilds", "crowd": "Crowdcheer"};
const foci = {
    "galactic": "UI/UX & System Design + Web App & Twitch Extension Dev",
    "crowd": "UI & System Design + Audio Visualization"
};
const details = {
    "galactic": "Creating a web-based CMS and stream extension for twitch creators to build community engagement and increase revenue.", 
    "crowd": "Designing an app to visualize authentic fan reactions for socially distanced live events."
}

const splash = {"galactic": galactic, "crowd": crowd};

export default function Showcase(props){
    const bgColor = props.color=="dark"? "var(--dark)" : "var(--lite)";
    const text = props.color=="dark"? "white" : "black";
    const highlight = props.color=="dark"? "var(--dark-pink)" : "var(--lite-pink)";

    const heading = headings[props.item];
    const focus = foci[props.item];
    const detail = details[props.item];

    return(
        <div className={style.showcase} style={{backgroundColor: bgColor}}>
            {props.children}
            
            <div className={style.wrapper}>
            
                <div className={style.textblock}>
                <h2 className='project' style={{color: text}}>{props.type}</h2>
                    <p className='heading'  style={{color: text}}>{heading}</p>
                    <p className='focus' style={{color: highlight}}>{focus}</p>
                    <p className='detail' style={{color: text}}>{detail}</p>
                    <Enter color={props.color} disable={props.disable} date={props.date}/>
                </div>
                <a className={style.splash} href={props.disable?null:"#"} target="_blank" rel="noreferrer" onClick={(e) => e.preventDefault()}>
                    <img src={splash[props.item]} />
                </a>
                
            </div>
            
        </div>
    )
}