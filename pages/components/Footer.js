import Link from 'next/link'
import YouTubeIcon from '@material-ui/icons/Youtube';
import FacebookIcon from '@material-ui/icons/Facebook';


export default function Footer() {
    return (
        <div className="container d-flex justify-content-center text-center pb-4">
            <Link href="#">
            <YouTubeIcon/>
            </Link>
                
            <Link href="#">
            <FacebookIcon/>
            </Link>
            
        </div>
    )
}
