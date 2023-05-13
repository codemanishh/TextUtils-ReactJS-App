import React, { useState } from 'react'

export default function TextForm(props) {

    const copytoclipboard=()=>{
        var text=document.getElementById("clpid");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleClr = () => {
        if (text !== '') {
            let cleartext = " ";
            setText(cleartext);

        }
    }

    const [text2, setText2] = useState('');

    const getEmails = () => {
      let found = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
      if (found !== null) {
        setText2(found.join(', '));
      } else {
        setText2('No email addresses found.');
      }
    }
    const handleUpClick = () => {
        console.log("upper case was clicked");
        let uprCase = text.toUpperCase();
        setText(uprCase);

    }

    const handleLoClick = () => {
        console.log("lower case was clicked");
        let lwrCase = text.toLocaleLowerCase();
        setText(lwrCase);

    }
    const handleOC = (event) => {
        console.log("handel  change");
        setText(event.target.value)
    }
    const handleOn = (event) => {
        console.log("handel  change");
        setText2(event.target.value)
    }
    const [text, setText] = useState("");
 

    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode==='dark'?'light':'black'}`}>Enter the Text to analyze</h1>
                <div className="form-floating">
                    <textarea id='clpid' className={`form-control bg-${props.mode==='light'?'light':'dark-subtle'}`} placeholder="Leave a comment here" cols="30" rows="10"  value={text} onChange={handleOC} ></textarea>
                    <label htmlFor="hi hi hi">enter the text here</label>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upperCase</button>
                <button className="btn btn-primary mx-2  my-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClr}>ClearArea</button>
                <button className="btn btn-primary mx-2 my-2" onClick={getEmails}>Gmail Finder</button>
                <button className="btn btn-primary mx-2 my-2" onClick={copytoclipboard}>Copy On Clipboard</button>
            </div>
            <div className="container my-4"  >
                <h1 className={`text-${props.mode==='dark'?'light':'black'}`}>Here you have the details about your data</h1>
                <p className={`text-${props.mode==='dark'?'light':'black'}`}>The Number of words in about is {(text.split(" ").filter((ele)=>{ return ele.length!=0}).length - 1)} and {text.length} character</p>
                <p className={`text-${props.mode==='dark'?'light':'black'}`}>{0.008 * (text.split(" ").length - 1)} Minute time to Read</p>
            </div>
            <div className="container my-4">
                <h1 className={`text-${props.mode==='dark'?'light':'black'}`}>All Gmail Id Found In the Text</h1>
                <textarea className={`form-control bg-${props.mode==='light'?'light':'dark-subtle'}`} onChange={handleOn} id="text-output" type="text" value={text2} readOnly  cols="30" rows="4">
                </textarea>
            </div>
        </>
    )
}
