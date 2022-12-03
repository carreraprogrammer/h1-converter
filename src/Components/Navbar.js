import '../Styles/Navbar.scss'
import { NavLink } from 'react-router-dom';
import { BiBookOpen } from 'react-icons/bi';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { FiUnlock } from 'react-icons/fi'
import  { IoIosArrowDown } from 'react-icons/io'

const Navbar =() => {
    return (
    <nav id="navbar">
      <div id="navigation">
        <RxDoubleArrowRight style={{margin: '0px 10px'}} />
        <BiBookOpen style={{marginRight: '5px'}} />
        <NavLink to="/"  style={{marginRight: '10px'}}>Main</NavLink>/ Gettin started / Front end test project
      </div>
      <div id="editing">
        <FiUnlock style={{marginRight: '5px'}}/>
        Editing
      </div>
      <div id="publishSpace">
        Publish space
        <IoIosArrowDown style={{
            marginLeft: '5px',
            height: '100%',
            cursor: 'pointer'
            }} />
      </div>
    </nav> 
    )
}

export default Navbar
