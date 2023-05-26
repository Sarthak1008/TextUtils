import React from 'react'

function About(props) {

  
  return (
    <div className='container' >
      <h1 className={`my-3 mx-1`} style={{color: props.mode==='dark'?'white':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Headline: TextUtils: A Text Manipulation Utility</strong>
            </button>
          </h2>
          <div id="collapseOne" className={`accordion-collapse collapse show`} data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}}>
              It can be used to remove punctuation, convert text to uppercase or lowercase, count words and characters, and more. TextUtils is a powerful tool that can be used to quickly and easily clean up and format text.
              Here are some of the things that TextUtils can do:
              <li>Remove punctuation</li>
              <li>Convert text to uppercase or lowercase</li>
              <li>Count words and characters</li>
              TextUtils is a free and open source project.
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Some examples of how TextUtils can be used:</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} >
              TextUtils is easy to use and can be integrated into any project. It is a valuable tool for anyone who needs to manipulate text. 
              <li>A writer can use TextUtils to count the number of words in a chapter to make sure it is the right length.</li>
              <li>A teacher can use TextUtils to remove punctuation from a student's essay to make it easier to read.</li>
              <li>A business can use TextUtils to convert a list of customer names to uppercase to make them more professional</li>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Additional features of TextUtils:</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}}>
              <div className="accordion-body" >
                <li>TextUtils is available for Windows, Mac, and Linux.</li>
                <li>TextUtils is open source and free to use.</li>
                <li>TextUtils has a user-friendly interface.</li>
                <li>TextUtils is constantly being updated with new features.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About
