import Head from 'next/head'
import Image from 'next/image'
import Nav from './components/Nav'
import Booking from './components/Booking'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/Heading'
import Blog from './components/Blog'
import Dropbox from './components/Dropbox'
import Footer from './components/Footer'



export default function Home() {
  return (
    


    <div>

<Head>

<title>Home</title>
<meta name="description" content="The best resource for getting you ready for the TOEFL"/> 
</Head>

    <Nav/>
    <Heading/>
    
    <Blog/>


    <div>
    <Dropbox/>
      <Booking/>
      <Footer/>
    </div>
    </div>
    
  )
}
