import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from 'react-router-dom'


function Publicity({text1,text2,color,icon}) {
  return (
    <NavLink to='/loading' className={`flex justify-between items-center border shadow-md m-2 rounded-[10px] mt-4 p-4 ${color}`}>

      {/* text */}
      <div className="mr-8">
        <div>{text1}</div>
        <div className="font-bold">{text2}</div>
      </div>
      {/* image / icon */}
      <div className="text-4xl text-customPurpure">
        <FontAwesomeIcon icon={icon} />
      </div>
    </NavLink>
  );
}

export default Publicity;
