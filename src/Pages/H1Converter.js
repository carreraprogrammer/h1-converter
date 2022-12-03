
import '../Styles/H1Converter.scss'
import HtmlText from "../Components/HtmlText";
import InputText from "../Components/InputText";
import StatusBar from "../Components/StatusBar";


const H1Converter = () => {
 return ( 
 <div className="pageContainer">
    <StatusBar />
    <h1 id="pageTitle">Front-end developer test project</h1>
    <p id="pageDescription">Your goal is to make a page that looks exactly like this one, and has the ability H1 text simply by typing / then 1, then typing text, and hitting enter</p>
    <HtmlText />
    <InputText />
  </div>)
}

export default H1Converter