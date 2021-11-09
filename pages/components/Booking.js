import { InlineWidget } from "react-calendly";
import 'bootstrap/dist/css/bootstrap.min.css';




function Booking () {
    return (
<div id="feedback">
<h5 className="display-5 col-md-12 text-center text-sm-center text-md-center text-lg-center pb-5">Book a lesson with me</h5>

        
        <div className="container">
      
      <div className="container col-sm-12 col-md-6 pt-5 d-flex justify-content-center">
      <InlineWidget 
      styles={{height: '400px', width: '300px'}} 
      url="https://calendly.com/testprepnow" /> 
    </div>
    </div>
    </div>
    )
}

export default Booking