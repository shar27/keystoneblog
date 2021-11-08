import Image from 'next/image'
import Link from 'next/link'


function Blog() {
    return (
        
        

        <div className="container text-center">
        <div className="row row-cols-2">
            <div className="container text-start mb-0 pb-0">
            <h1>Beat the Toefl</h1>
            <p className="lead d-flex text-start">
                Ea proident pariatur sit voluptate proident pariatur adipisicing excepteur. Aute non ad nostrud cillum est id ea ut incididunt exercitation. 
               
            </p>

            <h1 className="display-5 text-center">Hello</h1>
            <p className="lead text-center"> Excepteur veniam est Lorem reprehenderit incididunt enim Lorem dolor elit. 
            Ut exercitation voluptate laborum proident. Culpa id eiusmod proident officia ex eiusmod anim qui tempor. 
            Eiusmod deserunt id Lorem aliquip id magna nostrud. 
            </p>
            <h1 className="display-5 text-center">Hello</h1>
            <p className="lead text-center"> Excepteur veniam est Lorem reprehenderit incididunt enim Lorem dolor elit. 
            Ut exercitation voluptate laborum proident. Culpa id eiusmod proident officia ex eiusmod anim qui tempor. 
            Eiusmod deserunt id Lorem aliquip id magna nostrud. 
            </p>
            <h1 className="display-5 text-center">Hello</h1>
            <p className="lead text-center"> Excepteur veniam est Lorem reprehenderit incididunt enim Lorem dolor elit. 
            Ut exercitation voluptate laborum proident. Culpa id eiusmod proident officia ex eiusmod anim qui tempor. 
            Eiusmod deserunt id Lorem aliquip id magna nostrud. 
            </p>
            </div>
            <div className="container p-4">
            <Image
                src="/students.jpg"
                width="1300"
                height="1400"
            />
        </div>
           
        </div>
        </div>
        
    )
}

export default Blog
