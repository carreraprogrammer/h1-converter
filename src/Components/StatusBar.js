import { BsClock } from 'react-icons/bs'
import { FiArrowDownLeft } from 'react-icons/fi';
import { BsCheck2Circle } from 'react-icons/bs';
import  { CiCloud } from 'react-icons/ci';
import { HiDotsVertical } from 'react-icons/hi';
import bunny from '../Resources/bunny.png'

const StatusBar = () => {
    return (
      <div id="statusBar">
        <div id="leftStatusSide">
          <p className="statusPartContainer"> <span id='greenP'> P </span> <span className="divisorStatus">|</span></p>
          <div className="statusPartContainer"><div id="time"><BsClock style= {{marginTop: '5px', marginRight: '5px'}}/> </div>0 min <span className="divisorStatus">|</span></div>
          <div className="statusPartContainer"><img src={bunny} alt="bunny" height="30px" /><span className="divisorStatus">|</span></div>
          <div className="statusPartContainer"><p id="statusSave"><FiArrowDownLeft style= {{marginTop: '5px', marginRight: '5px'}}/></p>0</div>
        </div>
        <div id="rightStatusSide">
          <BsCheck2Circle />
          <CiCloud style={{color: 'green'}}/>
          <HiDotsVertical style={{color: 'black'}}/>
        </div>
      </div>
    )
}

export default StatusBar
