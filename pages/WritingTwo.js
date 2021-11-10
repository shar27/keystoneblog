import Nav from "./components/Nav"
import Link from 'next/link'
import Head from 'next/head'
import NavTwo from "./components/NavTwo"


function WritingTwo() {
    return (
       
  <div>
  <Head>
<title>Independent writing</title>
<meta name="description" content="The best writing resources for getting you ready for the TOEFL"/> 
</Head>  
  <NavTwo/>
  <div>
    <h1 className="text-center">Independent Essays</h1>
  </div>
  <ol className="container d-grid justify-content-start text-primary">
  <Link href="/independentessays/IndieOne">
  <li><p href="#">Essay example</p></li>
  </Link>
  
  <Link href="/independentessays/IndieTwo">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/independentessays/IndieThree">
  <li><p href="#">Essay example</p> </li>
  </Link>

  <Link href="/independentessays/IndieFour">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/independentessays/IndieFive">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/independentessays/IndieSix">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/independentessays/IndieSeven">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/independentessays/IndieEight">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/independentessays/IndieNine">
  <li><p href="#">Essay example</p> </li>
  </Link>
  <Link href="/independentessays/IndieTen">
  <li><p href="#">Essay example</p> </li>
  </Link>
</ol>
</div>
    )
}

export default WritingTwo
