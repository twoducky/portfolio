import Social from '../Social'
import style from './socialbar.module.css'

export default function SocialBar(){
    return(
        <div className={style.socialbar}>
            <Social item="linkedin" color="dark" href="https://www.linkedin.com/in/evanxandrews/"/>
            <Social item="gmail" color="dark" onClick={(e)=>{
                    e.preventDefault();
                    alert("Saved email address to clipboard");
            }}/>
            <Social item="twitter" color="dark" href="https://twitter.com/e_makesthings"/>
            <div className={style.bar}></div>
            <Social item="figma" color="dark" href="https://www.figma.com/file/prIZFVnpo9sVv1NuFDbplQ/Portfolio"/>
            <Social item="github" color="dark" href="https://github.com/twoducky/portfolio"/>
        </div>
    )
}