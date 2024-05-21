import React, { useState, useEffect, useReducer } from 'react'

function Home() {
  // const[areainputval,setAreainputval]=useState('');

  const initialstate = {
    text: "",
    copied: false,
    wordcount: 0,
    charcount: 0,
    readingtime: 0
  }
  // console.log(areainputval);
  const reducerfn = (state, action) => {
    switch (action.type) {
      case "SET_TEXT":
        const wordcount = state.text.trim() ? state.text.trim().split(/\s+/).length : 0;
        const charcount = state.text.length;
        const readingtime = (wordcount / 200)
        return {
          ...state,
          text: action.payload,
          wordcount,
          charcount,
          readingtime,
          copied: false,
        }
      case "UPPERCASE":
        // const wordcount=state.text.trim() ? state.text.trim().split(/\s+/).length : 0;
        // const charcount=state.text.length;
        // const readingtime=Math.ceil(wordcount/200)
        return {
          ...state,
          text: state.text.toUpperCase(),

          copied: false
        }
      case "LOWERCASE":
        return {
          ...state,
          text: state.text.toLowerCase(),
          copied: false
        }
      case "CLEAR_TEXT":
        return {
          ...state,
          text: state.text = "",
          copied: false
        }
      case "COPY":
        return {
          ...state,
          text: state.text,
          copied: true,
        }
      case "WHITE-SPACE":
        return {
          ...state,
          text: state.text.replace(/\s+/g, ' '),
        }
      default:
        return state;
    }

  }
  const [state, dispatch] = useReducer(reducerfn, initialstate);


  const handletextareachange = () => {
    dispatch({ type: "SET_TEXT", payload: event.target.value })
  }

  const uppercase = () => {

    dispatch({ type: "UPPERCASE" })
    // console.log(state.areainputval);
  }
  const lowercase = () => {
    dispatch({ type: "LOWERCASE" })
  }
  const cleartext = () => {
    dispatch({ type: "CLEAR_TEXT" })
  }
  const copytext = () => {
    navigator.clipboard.writeText(state.text).then(() => {
      dispatch({ type: "COPY" })
    })
  }
  const removewhitepace = () => {
    dispatch({ type: "WHITE-SPACE" })
  }





  return (

    <div className='w-[90%] m-auto '>
      <br />
      <br />

      <div className=' m-auto '>
        <h1 className='text-4xl  py-8'>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>

        <textarea name="" id="" cols={150} rows={8} className='border-2 border-sky-400 m-auto text-lg dark:text-black' placeholder='Enter Your Text Here' onChange={handletextareachange} value={state.text}></textarea>
        <br />
        <br />
        <div className='flex gap-5 '>
          <button className='bg-blue-300 px-5 py-2 text-lg' onClick={uppercase}>Convert Uppercase</button>
          <button className='bg-blue-300 px-5 py-2 text-lg' onClick={lowercase}>Convert Lowercase</button>
          <button className='bg-red-300 px-5 py-2 text-lg' onClick={cleartext}>Clear text</button>
          <button className='bg-red-300 px-5 py-2 text-lg' onClick={copytext}>Copy Clipboard </button> <button className='bg-blue-300 px-5 py-2 text-lg' onClick={removewhitepace}>Remove Extraspace</button>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 className='text-4xl font-semibold'>Summary of your text</h1>
        <br />
        <p className='text-lg'>Number of words:- {state.wordcount} </p>
        <br />
        <p className='text-lg'>Number of charecters :- {state.charcount} </p>
        <br />
        <p className='text-lg'>Reading Time:- {state.readingtime} </p>
      </div>
      <br />
      <br />
      <div >
        <h1 className='text-4xl font-semibold'>Preview Document</h1>
        <br />
        <div className='overflow-y-auto bg-slate-400 min-h-28 px-6 py-4'>
          <h1 className='text-white text-xl'>{state.text}</h1>


        </div>



      </div>
      <br />
      <br />

    </div>
  )
}

export default Home
