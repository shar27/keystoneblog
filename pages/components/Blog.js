import Image from 'next/image'
import Link from 'next/link'


function Blog() {
    return (
        
        

        <div className="container text-center">
        <div className="row row-cols-2">
            <div className="container text-start mb-4 pb-0">
            <h1 className="display-3"><em>Beat the Toefl</em></h1>
            <p className="lead d-flex text-start">
                Ea proident pariatur sit voluptate proident pariatur adipisicing excepteur. Aute non ad nostrud cillum est id ea ut incididunt exercitation. 
               
            </p>

            <h1 className="display-5 text-start">Writing</h1>
            <p className="lead text-start"> Excepteur veniam est Lorem reprehenderit incididunt enim Lorem dolor elit. 
            Ut exercitation voluptate laborum proident.
            </p>
            <h1 className="display-5 text-start">Speaking</h1>
            <p className="lead text-start"> Excepteur veniam est Lorem reprehenderit incididunt enim Lorem dolor elit. 
            Ut exercitation voluptate laborum proident. 
            </p>
            <h1 className="display-5 text-start">Reading</h1>
            <p className="lead text-start"> Excepteur veniam est Lorem reprehenderit incididunt enim Lorem dolor elit. 
            Ut exercitation voluptate laborum proident. 
            </p>
            </div>
            <div className="container p-4 col-12 col-lg-6">
            <Image
                priority
                src="/students.jpg"
                alt="kids"
                width="1300"
                height="1400"
            />
        </div>
           
        </div>
        </div>
        
    )
}

export default Blog
