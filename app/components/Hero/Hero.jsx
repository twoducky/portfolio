import style from './hero.module.css';
import Image from 'next/image';
import SocialBar from '../SocialBar';
import keyboard from '../../public/assets/keyboard.svg';
import coffee from '../../public/assets/coffee.svg';
import plant from '../../public/assets/plant.svg';

export default function Hero(){
    return(
        <div className={style.hero}>
            <h1 className={style.title}>Fullstack designer working with startups to create{' '}<span>growth-driven</span>{' '}products.</h1>
            <div className={style.keyboard}>
                <Image src={keyboard} />
            </div>
            <div className={style.coffee}>
                <Image src={coffee} />
            </div>
            <div className={style.plant}>
                <Image src={plant} />
            </div>
            <div className={style.social}>
                <SocialBar/>
            </div>
        </div>
    )
}