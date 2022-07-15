import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
const weenie = '/assets/weenie.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evan Andrews | Portfolio</title>
        <meta name="description" content="Fullstack CX manager working with startups to create growth-driven products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      </Head>

      <main className={styles.main}>
        <Hero/>
        <Showcase className="container" item={"galactic"} type={"Personal"} color={"dark"} disable={false} date={"6/30/22"}>
          <div className={styles.weenie}>
            <img src={weenie} />
          </div>
        </Showcase>
        <Showcase className="container" item={"crowd"}  type={"Freelance"} color={"lite"} disable={true} date={"TBD"}/>
        <Footer/>
      </main>
    </div>
  )
}
