import { InlineWidget } from "react-calendly";
import 'bootstrap/dist/css/bootstrap.min.css';




function Booking () {
    return (


        <div className="container d-flex">
      <h5 className="display-5 text-start p-2">Book a lesson with me</h5>
      <div className="container">
      <InlineWidget 
      styles={{height: '400px', width: '400px'}} 
      url="https://calendly.com/testprepnow" /> 
    </div>
    </div>
    )
}

export default Booking