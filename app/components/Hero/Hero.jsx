import style from './hero.module.css';
import SocialBar from '../SocialBar';
const keyboard = '/assets/keyboard.svg';
const coffee = '/assets/coffee.svg';
const plant = '/assets/plant.svg';

export default function Hero(){
    return(
        <div className={style.hero}>
            <h1 className={style.title}>Fullstack PM working with startups to create{' '}<span>growth-driven</span>{' '}products.</h1>
            <div className={style.keyboard}>
                <img src={keyboard} />
            </div>
            <div className={style.coffee}>
                <img src={coffee} />
            </div>
            <div className={style.plant}>
                <img src={plant} />
            </div>
            <div className={style.social}>
                <SocialBar/>
            </div>
        </div>
    )
}