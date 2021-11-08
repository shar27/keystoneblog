import Head from 'next/head'
import Image from 'next/image'
import Nav from './components/Nav'
import Booking from './components/Booking'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/Heading'
import Blog from './components/Blog'


export default function Home() {
  return (
    <div>

    <Nav/>
    <Heading/>
    
    <Blog/>


    <div>
      <Booking/>
    </div>
    </div>
  )
}
