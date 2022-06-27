import SocialBar from '../SocialBar'
const profile = '/assets/profile_two.jpg'
import style from './footer.module.css'


export default function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.profile}>
                <img src={profile}/>
            </div>
            <div className={style.wordblock}>
                <p className='subheading'>Get InTouch</p>
                <SocialBar/>
                <p className='detail'>© Evan Andrews. All rights reserved.</p>
            </div>
        </div>
    )
}