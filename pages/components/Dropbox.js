import DropboxChooser from 'react-dropbox-chooser'
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const APP_KEY="zgldeuzlzzilt0u"

export default function Dropbox() {
    
    const [url,setUrl] = useState("")
    function handleSuccess(files){
      setUrl(files[0].thumbnailLink)
      console.log(url)
    }
    
    return (
        <div>
    <h5 className="display-5 text-center ms-4 ">Upload your file here...</h5>
    <p className=" lead text-center ms-4"> Please include your full name and title of the document.</p>
    <p className=" lead text-center ms-4 ">"Joe Bloggs - Integrated essay one feedback"</p>
      <br/><br/>
    <div className="container  d-flex justify-content-center">
      <DropboxChooser appKey={APP_KEY}
                      success={handleSuccess}
                      cancel={() => console.log('closed')}
                      multiselect={true}
                      extensions={['.mp4','.pdf', '.docx', '.mp3', '.png', '.jpg']}
                      >
        <button className="btn btn-primary">Upload or Choose Files</button>
        <div className="dropbox"></div>
        <br/><br/>
        
      </DropboxChooser>
    
    </div>
        </div>
    )
}
