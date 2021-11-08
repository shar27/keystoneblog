import DropboxChooser from 'react-dropbox-chooser'
import React, {useState} from 'react'

const APP_KEY="25yimk69f3etkxa"

export default function Dropbox() {
    
    const [url,setUrl] = useState("")
    function handleSuccess(files){
      setUrl(files[0].thumbnailLink)
      console.log(url)
    }
    
    return (
        <div>
             <h1 style={{textAlign:"center"}}>Upload Or Choose Files to DropBox</h1>
      <br/><br/>
    <div className="container">
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
