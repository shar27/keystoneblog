import { InlineWidget } from "react-calendly";
import 'bootstrap/dist/css/bootstrap.min.css';




function Booking () {
    return (


        <div className="container ">
      <h5 className="display-5 text-start p-2">Book a 30 minute mock test with me</h5>
      <h5 className="display-5 text-start">Book a 60 minute lesson with me</h5>
      <InlineWidget styles={{height: '400px', width: '400px'}} url="https://calendly.com/testprepnow" /> 
    </div>
    )
}

export default Booking