import { RxText } from 'react-icons/rx';
import $ from 'jquery';
import ReactDOM from 'react-dom';
const InputMenu = (props) => {
   
    const input = props.input;

    const testButton = () => {
      console.log('the button is clicked')
      const inputh1 = ReactDOM.findDOMNode(document.querySelector('#inputh1'))
      const inputText = ReactDOM.findDOMNode(document.querySelector('#inputText'))
      const menu = ReactDOM.findDOMNode(document.querySelector('#h1Menu'))
      $(menu).css({
        display: 'none',
      })
      $(inputText).css({
        display: 'none',
      })
     $(inputh1).css({
        display: 'block',
      }).focus().select()
    }

    const handleMenu = () => {
      return input.content === '/1' ? {display: 'block'} : {display: 'none'}
    }

    const openh1Input = () => {
        const button = ReactDOM.findDOMNode(document.querySelector('#autoFocus'))
        const regex = new RegExp('^/1');
        if(regex.test(input.content)){
           $(button).click()        
        }
    }

    openh1Input()


    return(
      <div id="h1Menu" style={handleMenu()}>
        <h3>Add blocks</h3>
        <p>Keep typing to filter, or escape to exit</p>
        <p id="filteringKeyword">Filtering keyword</p>
        <div id="h1Options" >
          <button type="button" href="../" className="optionh1" onClick={testButton} id="autoFocus" autoFocus>
            <RxText style={{
              width: '15%',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'gray',
              marginLeft: '10px'
              }} />
            <div id="optionDescription">
              <h3>Heading 1</h3>
              <p>Shortcut: type # + space</p>
            </div>
          </button>
          <button href="./" className="optionh1">
            <RxText style={{
              width: '15%',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'gray',
              marginLeft: '10px'
              }} />
            <div id="optionDescription">
              <h3>Expandable Heading 1</h3>
              <p>Shortcut: type {'>'}{'>'} # + space</p>
            </div>
          </button>
        </div>
      </div>
    )
}

export default InputMenu;