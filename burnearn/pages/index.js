import Head from 'next/head'
import { Nav } from 'react-bootstrap'
import Earlyaccess from '../component/Earlyaccess'
import HeroSection from '../component/HeroSection'
import CustomNavbar from '../component/CustomNavbar'
import { Subheading } from '../component/Subheading'
import Video from '../component/Video'

import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <div className={styles.homecontainer}>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Bree+Serif' rel='stylesheet' type='text/css'/>
      </Head>
      <CustomNavbar/>
      <HeroSection/>
      <Subheading/>
      <Earlyaccess/>
      <Video/>
  
    </div>
  )
}
