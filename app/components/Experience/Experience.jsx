import style from './experience.module.css';
import Image from 'next/image';
import timeline from '../../public/assets/timeline.svg'

export default function Experience(){
    return(
        <div className={style.experience}>
            <div className={style.textblock}>
                <p className='heading'>Experience</p>
                <p className={style.highlight}>
                    Conceptual thinking<br/>
                    UX Data Analysis<br/>
                    Interactive experiences<br/>
                    Iconography and typography<br/>
                    End-to-end product pipeline<br/>
                    Multidiciplinary team management<br/>
                    Skilled in most tech stacks</p>
            </div>
            <div className={style.summaryblock}>
                <h2 className='project'>Freelance</h2>
                <p className='subheading'>10 years of curiosity</p>
                <div className={style.timeline}>
                    <Image src={timeline} layout='fill' objectFit='contain'/>
                </div>
            </div>
        </div>
    )
}