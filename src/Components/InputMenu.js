import { RxText } from 'react-icons/rx';
import $ from 'jquery';
import ReactDOM from 'react-dom';

const InputMenu = (props) => {
    const openMenu = props.openMenu;

    const testButton = () => {
      console.log('The button works')
    }

    const handleMenu = () => {
      return openMenu === '/1' ? {display: 'block'} : {display: 'none'}
    }

    const openh1Input = () => {
        const button = ReactDOM.findDOMNode(document.querySelector('#inputText'))
        const regex = new RegExp('^/1.');

        if(regex.test(openMenu)){
           $(button).css({
              fontSize: '30px',
              fontWeight: 'bold',
              height: '50px'
            })
           props.setInput(openMenu.replace('/1', ''))
        }
    }

    openh1Input()


    return(
      <div id="h1Menu" style={handleMenu()}>
        <h3>Add blocks</h3>
        <p>Keep typing to filter, or escape to exit</p>
        <p id="filteringKeyword">Filtering keyword</p>
        <div id="h1Options" >
          <button type="button" href="../" className="optionh1" onClick={testButton} id="autoFocus">
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