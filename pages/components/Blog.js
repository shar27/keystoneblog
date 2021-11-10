import Image from 'next/image'
import Link from 'next/link'


function Blog() {
    return (
        
        

        <div className="container text-center">
        <div className="row row-cols-2">
            <div className="container text-start mb-4 pb-0">
            <h1 className="display-3"><em>Beat the Toefl</em></h1>
            <p className="lead d-flex text-start">
                Do you want to improve your TOEFL score?
            </p>

            <h1 className="display-5 text-start">Writing</h1>
            <p className="lead text-start"> Writing guides
            </p>
            <h1 className="display-5 text-start">Speaking</h1>
            <p className="lead text-start"> Speaking guides 
            </p>
            <h1 className="display-5 text-start">Reading</h1>
            <p className="lead text-start">  Reading guides
            </p>
            <h1 className="display-5 text-start">Essays</h1>
            <p className="lead text-start"> Sample guides
            </p>
           
            </div>
            <div className="container p-4 col-12 col-lg-6">
            <Image
                priority
                src="/students.jpg"
                alt="students"
                width="1300"
                height="1400"
            />
        </div>
           
        </div>
        </div>
        
    )
}

export default Blog
