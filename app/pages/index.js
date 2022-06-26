import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import weenie from '../public/assets/weenie.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evan Andrews | Portfolio</title>
        <meta name="description" content="Fullstack designer working with startups to create growth-driven products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      </Head>

      <main className={styles.main}>
        <Hero/>
        <Showcase className="container" item={"galactic"} type={"Personal"} color={"dark"} disable={true} date={"6/30/22"}>
          <div className={styles.weenie}>
            <Image src={weenie} />
          </div>
        </Showcase>
        <Showcase className="container" item={"crowd"}  type={"Freelance"} color={"lite"} disable={true} date={"7/7/22"}/>
        <Footer/>
      </main>
    </div>
  )
}
