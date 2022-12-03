import InputMenu from './InputMenu';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetState, followInput, followh1 } from '../Redux/InputText/InputSlice';

const InputText = () => {
  const dispatch = useDispatch()

  const input = useSelector((state) =>  state.inputText)

  const addNewH1 = () => {
    const preview  = ReactDOM.findDOMNode(document.querySelector('#htmlPreview'));
    const h1 = ReactDOM.findDOMNode(document.createElement('h1'));
    h1.innerHTML = `${input.h1Text}`;
    preview.appendChild(h1);
    dispatch(resetState())
  }
  const addNewText = () => {
    const preview  = ReactDOM.findDOMNode(document.querySelector('#htmlPreview'));
    const paragraph = ReactDOM.findDOMNode(document.createElement('p'));
    paragraph.textContent = `${input.content}`
    preview.appendChild(paragraph)
    dispatch(resetState())
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
    dispatch(resetState())
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
          (e) => {
            dispatch(followInput(e.target.value)); 
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
          (e) => {
            dispatch(followh1(e.target.value)); 
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
      <InputMenu input={input} />
    </div>
    
  )
}

export default InputText