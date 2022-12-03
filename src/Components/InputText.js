import React, { useState } from 'react';
import InputMenu from './InputMenu';
import $ from 'jquery';
import ReactDOM from 'react-dom';

const InputText = () => {
  const [input, setInput] = useState('');

  const addNewH1 = () => {
    const preview  = ReactDOM.findDOMNode(document.querySelector('#htmlText'));
    const inputText = ReactDOM.findDOMNode(document.querySelector('#inputText'));

    preview.innerHTML = `${input}`;
    setInput('')
  }

  return (
    <form id="inputTextContainer">
      <input 
        value={input}
        id='inputText' 
        type="text" 
        placeholder="Type / for blocks, @ to link docs" 
        onChange={
          (e) => {setInput(e.target.value);
        }} 
      />
      <button id="submitBtn" type="submit"  onClick={(e) => {
          e.preventDefault();
          console.log(input)
          addNewH1();
        }}></button>
      <InputMenu openMenu={input} setInput={setInput}/>
      
    </form>
  )
}

export default InputText