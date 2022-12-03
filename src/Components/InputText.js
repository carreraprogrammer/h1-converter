import React, { useState } from 'react';
import InputMenu from './InputMenu';
import $ from 'jquery';
import ReactDOM from 'react-dom';

const InputText = () => {
  const [input, setInput] = useState({
    content: '',
    h1: false,
    h1Text: '',
  });

  const addNewH1 = () => {
    const preview  = ReactDOM.findDOMNode(document.querySelector('#htmlPreview'));
    const h1 = ReactDOM.findDOMNode(document.createElement('h1'));
    h1.innerHTML = `${input.h1Text}`;
    preview.appendChild(h1);
    setInput({...input, content:'', h1Text: ''})
  }
  const addNewText = () => {
    const preview  = ReactDOM.findDOMNode(document.querySelector('#htmlPreview'));
    const paragraph = ReactDOM.findDOMNode(document.createElement('p'));
    paragraph.textContent = `${input.content}`
    preview.appendChild(paragraph)
    setInput({...input, content:'', h1Text: ''})
  }
  const changeToText = () => {
    const inputh1 = ReactDOM.findDOMNode(document.querySelector('#inputh1'))
    const inputText = ReactDOM.findDOMNode(document.querySelector('#inputText'))
    $(inputText).css({
      display: 'block',
    }).focus().select()
   $(inputh1).css({
      display: 'none',
    })
    setInput({...input, content:'', h1Text: ''})
  }

  return (
    <div id="inputsContainer">
    <form id="inputTextContainer">
      <input 
        value={input.content}
        id='inputText' 
        type="text" 
        placeholder="Type / for blocks, @ to link docs" 
        onChange={
          (e) => {setInput({
            ...input,
            content: e.target.value});
        }}
      />
      <button 
        id="submitBtn" 
        type="submit" 
        onClick={(e) => {
          e.preventDefault();
          addNewText();
        }}></button>
      </form>
      <form id="inputh1Container">
      <input 
        value={input.h1Text}
        id='inputh1' 
        type="text" 
        placeholder="HEADING 1" 
        onChange={
          (e) => {setInput({
            ...input,
            content: e.target.value,
            h1Text: e.target.value.replace('/1', '')
          });
        }} 
        onKeyDown={
          (e) => e.key === 'Escape' ? changeToText() : null
        }
      />
      <button 
        id="submitBtn" 
        type="submit"  
        onClick={(e) => {
          e.preventDefault();
          console.log(input.content)
          addNewH1();
          changeToText();
        }}
        ></button>
      </form>
      <InputMenu input={input} setInput={setInput}/>
    </div>
    
  )
}

export default InputText