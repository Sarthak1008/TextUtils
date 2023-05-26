import { element } from 'prop-types';
import React, { useState } from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick = () => {
        console.log("LowerCase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleCopyClick = () => {
        console.log("Content copied");
        var text1 = document.getElementById('myBox');
        text1.select();
        navigator.clipboard.writeText(text1.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpaces = () => {
        console.log("Removed extra spaces");
        var text1 = document.getElementById('myBox');
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed extra spaces","success");
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCaptitalLetter = (event) => {
        var text1 = document.getElementById('myBox');
        let newText = text.split(/[ ]+/);
        let newText1 = newText.join(' ');
        let newText2 = newText1.split(' ');
        console.log("All first letter capitalized");
        for( let i=0;i<newText2.length;i++){
            newText2[i] = newText2[i].charAt(0).toUpperCase()+newText2[i].substring(1,newText2[i].length).toLowerCase();
        }
        let newText3 = newText2.join(' ');
        setText(newText3);
        props.showAlert("All first letter capitalized","success");

    }
    const handleClearClick = () => {
        console.log("Clear text was clicked ");
        let newText = '';
        setText(newText);
        props.showAlert("Cleared","success");
    }
    const [text, setText] = useState("");

    const getTextColor = () => {
        if (props.mode === 'dark') {
          return 'text-white';
        }
        return ''; // Empty string if mode is not 'dark'
      };

      
    //text = "new text"; //Wrong way to change the state
    //setText("new text"); // Correct way to change the state
    return (
        <>
            <div>
                <h1 className={`my-1 ${getTextColor()}`}>{props.heading} </h1>
                <div className="my-3">
                    <textarea className={`form-control`} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} placeholder="Enter your text here" value={text} onChange={handleOnChange} id="myBox" rows="8" />
                </div>
                <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary' onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary mx-3 my-1' onClick={handleLowClick}>Convert To LowerCase</button>
                <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary mx-2 my-1' onClick={handleCaptitalLetter}>Capitalize first letter of every word</button>
            </div>
            <div className={`container my-3 ${getTextColor()}`}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
            </div>
        </>
    )
}

export default TextForm
