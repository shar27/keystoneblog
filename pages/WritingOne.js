
import Link from 'next/link'
import Head from 'next/head'

import NavTwo from './components/NavTwo.js'


function WritingOne() {
    return (
        <div>
  <Head>
<title>Integrated writing</title>
<meta name="description" content="The best writing resources for getting you ready for the TOEFL"/> 
</Head>  
  <NavTwo/>
  <div>
    <h1 className="text-center">Integrated Essays</h1>
  </div>
  <ol className="container d-grid justify-content-start text-primary">
  <Link href="/integratedessays/EssayOne">
  <li><p href="#">Essay example</p></li>
  </Link>
  
  <Link href="/integratedessays/EssayTwo">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/integratedessays/EssayThree">
  <li><p href="#">Essay example</p> </li>
  </Link>

  <Link href="/integratedessays/EssayFour">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/integratedessays/EssayFive">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/integratedessays/EssaySix">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/integratedessays/EssaySeven">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/integratedessays/EssayEight">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/integratedessays/EssayNine">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/integratedessays/EssayTen">
  <li><p href="#">Essay example</p> </li>
  </Link>
</ol>
</div>
  
    )
}

export default WritingOne
