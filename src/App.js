// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './style.css';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import cakes from './images/cakes.png';


export default function App() {
  const [text, setText] = React.useState("")

  function handleText(event) {
    const newText = event.target.value
    setText(newText)

  }

  const node = document.getElementById('image-download')
  function downloadImage() {
    toPng(node)
      .then(dataURL => {
        download(dataURL, "custom-image.png")
      })
      .catch(() => console.log("Error"))
  }

  return (
    <div className="container-outer">
      <div className='container'>
        <h1 className='name'>Enter the name of person whom you want to wish Happy Birthday!!!🎉🥳🎈🎈🎈</h1>
        <input type="text" placeholder='Type text here' className='input' onChange={handleText} value={text} />

        <div className='image-wrapper' id='image-download'>
          <img src={cakes} width={"500px"} height={"500px"} alt="Cake Image" className='image' />
          <div className='image-text-div'>
            <h1 className="image-text">{text}</h1>
          </div>
        </div>
        <button className='download-button' onClick={downloadImage}>Download Image</button>

      </div>
    </div>

  )

}

// export default App;
