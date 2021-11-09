import Nav from "./components/Nav"
import Link from 'next/link'

function SpeakingOne() {
    return (
        <div>
            <div>
    <Link  href="/">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">TakeToefl</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <Link href="/">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </Link>
        
        <li className="nav-item dropdown">
        <Link href="/">
          <a className="nav-link dropdown-toggle" 
           id="navbarDropdownMenuLink" role="button" 
          data-bs-toggle="dropdown" aria-expanded="false">
            Writing
          </a>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/WritingOne">
            <li><a className="dropdown-item">Writing one</a></li>
            </Link>
            <Link href="/WritingTwo">
            <li><a className="dropdown-item">Writing two</a></li>
            </Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
        
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Listening
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/ListeningOne">
            <li><a className="dropdown-item">Listening one</a></li>
            </Link>
            <Link href="/ListeningTwo">
            <li><a className="dropdown-item" >Listening two</a></li>
            </Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
        
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Reading
          </a>
         
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/ReadingOne">
            <li><a className="dropdown-item" >Reading one</a></li>
            </Link>
            <Link href="/ReadingTwo">
            <li><a className="dropdown-item" >Reading two</a></li>
            </Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Speaking
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/SpeakingOne">
            <li><a className="dropdown-item" >Speaking one</a></li>
            </Link>
            <Link href="/SpeakingTwo">
            <li><a className="dropdown-item" >Speaking two</a></li>
            </Link>
            <Link href="/SpeakingThree">
            <li><a className="dropdown-item" >Speaking three</a></li>
            </Link>
            <Link href="/SpeakingFour">
            <li><a className="dropdown-item" >Speaking four</a></li>
            </Link>
          </ul>
        </li>
        
        
        <li className="nav-item dropdown">
        <Link href="#feedback"> 
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Feedback
          </a>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/#feedback">
            <li><a className="dropdown-item">Essay feedback</a></li>
            </Link>
            <Link href="/#feedback">
            <li><a className="dropdown-item">Assignment feedback</a></li>
              </Link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </Link>
        </div>
        </div>
    )
}

export default SpeakingOne
