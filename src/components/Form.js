import React from "react";
import './Form.css'
import Memes from '../memesData'


function Form() {
  let url
  function getMemeImg(){
    url =  (Memes.data.memes[Math.floor(Math.random()*100)].url)
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
                <p>{url}</p>
            </div>
        </main>
  )
}

export default Form