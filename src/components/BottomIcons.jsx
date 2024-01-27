import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faBus,faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

function BottomIcons() {
  return (
    <div className="flex justify-between m-2 mt-4 rounded-[10px] p-4">

      <NavLink to="/loading" className="text-center">
        <button className="p-3 text-[20px] w-12 border  rounded-[10px] m-2  bg-customLilaBg  text-customPurpure hover:bg-customHover hover:text-white">
          <FontAwesomeIcon icon={faBus} />
        </button>
        <p className="text-[11px]">
          Transferir
          <br />
          dinero
        </p>
      </NavLink>

      <NavLink to="/loading" className="text-center">
        <button className="p-3 text-[20px] w-12 border  rounded-[10px] m-2  bg-customLilaBg  text-customPurpure hover:bg-customHover hover:text-white">
          <FontAwesomeIcon icon={faMobileScreen} />
        </button>
        <p className="text-[11px]">
          Recarga
          <br />
          celular
        </p>
      </NavLink>

      <NavLink to="/loading" className="text-center">
        <button className="p-3 text-[20px] w-12 border  rounded-[10px] m-2  bg-customLilaBg  text-customPurpure hover:bg-customHover hover:text-white">
          <FontAwesomeIcon icon={faFileInvoiceDollar} />
        </button>
        <p className="text-[11px]">
          Pagar
          <br />
          Servicio
        </p>
      </NavLink>

      <NavLink to="/loading" className="text-center">
        <button className="p-3 text-[20px] w-12 border  rounded-[10px] m-2  bg-customLilaBg  text-customPurpure hover:bg-customHover hover:text-white">
          <FontAwesomeIcon icon={faBus} />
        </button>
        <p className="text-[11px]">
          Transferir
          <br />
          dinero
        </p>
      </NavLink>

    </div>
  );
}

export default BottomIcons;
