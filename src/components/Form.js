import React from "react";
import './Form.css'
import Memes from '../memesData'


function Form() {
  let [url, setUrl] = React.useState("")
  function getMemeImg(){
    setUrl(Memes.data.memes[Math.floor(Math.random()*100)].url)
  }
  return(
    <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImg}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="img-con">
                    <img src={url} className="meme-img"/>
                </div>
        </main>
        
  )
}

export default Form