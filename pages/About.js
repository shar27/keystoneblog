import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import NavTwo from "./components/NavTwo"


function About() {
    return (
<div>
    <Head>

    <title>About</title>
    <meta name="description" content="I am Michael Eshun and I am the author of this sites content"/> 
</Head>
         
    <NavTwo/>

        </div>
    )
}

export default About
