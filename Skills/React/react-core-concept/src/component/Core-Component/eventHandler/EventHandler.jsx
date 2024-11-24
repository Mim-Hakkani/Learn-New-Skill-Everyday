import React, { useState } from 'react';

const EventHandler = () => {

    const [buttonText,setButtonText] =useState('')
    const [keyText,setKeyText] =useState('')

    const handleClick=(name)=>{
        console.log(`Your Name is : ${name}`);
    }

    const handleChange =()=>{
        console.log(event.target.value);
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("hiiii");
    }


    const handleOnMouseEnter = () => {
        setButtonText('mim');
      };
    
      const handleOnMouseLeave = () => {
        setButtonText('hakkani');
      };

      const handleOnKeyUp =()=>{

        setKeyText('mim');
      }

      const handleOnKeyDown =()=>{

        setKeyText('vaiii');
      }
    

// onClick: Triggered when an element is clicked.
// onChange: Triggered when the value of an input element changes.
// onSubmit: Triggered when a form is submitted.
// onMouseEnter / onMouseLeave: Triggered when the mouse enters or leaves an element.
// onKeyDown / onKeyUp: Triggered when a key is pressed or released.

    return (
        <div>

            {/* input  */}

             <input onChange={handleChange} placeholder='name'/>
           
           {/*  click  */}
            <button onClick={()=>handleClick("Hakkani")}>click me </button>
            <button onClick={()=>(alert('hi'))}>click me2 </button>


            <form onSubmit={handleSubmit}>
                <button type='submit'>say hi</button>
            </form>


            <button 
            onMouseEnter={handleOnMouseEnter} 
            onMouseLeave={handleOnMouseLeave}
            >Enter Mouse : {buttonText} </button>


<button 
            onKeyUp={handleOnKeyUp} 
            onKeyDown={handleOnKeyDown}
            >Key Mouse : {keyText} </button>
        </div>
    );
};

export default EventHandler;