import Link from 'next/link'

export default function Footer() {
    return (
        <div className="container d-flex justify-content-center text-center pb-4">
            <Link href="#">
                <a className="me-2">social media</a>
            </Link>
            <Link href="#">
                <a className=" ms-2 me-2">social media</a>
            </Link>
            <Link href="#">
                <a className="ms-2">social media</a>
            </Link>
                
            
        </div>
    )
}
