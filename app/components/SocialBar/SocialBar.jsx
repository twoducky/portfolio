import Social from '../Social'
import style from './socialbar.module.css'

export default function SocialBar(){
    return(
        <div className={style.socialbar}>
            <Social item="linkedin" color="dark" href="https://www.linkedin.com/in/evanxandrews/"/>
            <Social item="gmail" color="dark" onClick={(e)=>{
                    e.preventDefault();
                    navigator.clipboard.writeText("evanxandrews@gmail.com").then(()=>{
                        alert("Saved email address to clipboard");
                    }).catch(e => {
                        var textArea = document.createElement("textarea");
                        textArea.value = "evanxandrews@gmail.com";
                        
                        // Avoid scrolling to bottom
                        textArea.style.top = "0";
                        textArea.style.left = "0";
                        textArea.style.position = "fixed";

                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();

                        try {
                            var successful = document.execCommand('copy');
                            var msg = successful ? 'successful' : 'unsuccessful';
                            if(successful) alert("Saved email address to clipboard");
                            console.log('Fallback: Copying text command was ' + msg);
                        } catch (err) {
                            console.error('Fallback: Oops, unable to copy', err);
                        }

                        document.body.removeChild(textArea);
                    });                    
            }}/>
            <Social item="twitter" color="dark" href="https://twitter.com/e_makesthings"/>
            <div className={style.bar}></div>
            <Social item="figma" color="dark" href="https://www.figma.com/file/prIZFVnpo9sVv1NuFDbplQ/Portfolio"/>
            <Social item="github" color="dark" href="https://github.com/twoducky/portfolio"/>
        </div>
    )
}