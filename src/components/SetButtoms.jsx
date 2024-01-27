import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SetButtoms() {
  return (
    <div>
      <div className="flex justify-around mt-2">
        <NavLink to="/movements" className="text-center">
          <button className="p-3 w-12 border  rounded-[10px] m-2  bg-customLilaBg  text-customPurpure hover:bg-customHover hover:text-white">
            <FontAwesomeIcon icon={faMoneyBill1} />
          </button>
          <p className="text-[11px]">
            Ultimos
            <br />
            Movimientos
          </p>
        </NavLink>

        <NavLink to='/loading' className="text-center">
          <button className="p-3 w-12 border  rounded-[10px] m-2  bg-customLilaBg  text-customPurpure hover:bg-customHover hover:text-white">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          </button>
          <p className="text-[11px]">
            Transferir
            <br />
            dinero
          </p>
        </NavLink>

        <NavLink to='/loading' className="text-center">
          <button className="p-3 w-12 border  rounded-[10px] m-2  bg-customLilaBg  text-customPurpure hover:bg-customHover hover:text-white">
            <FontAwesomeIcon icon={faCreditCard} />
          </button>
          <p className="text-[11px]">
            Ingresa
            <br />
            dinero
          </p>
        </NavLink>

        <NavLink to='/loading' className="text-center">
          <button className="p-3 w-12 border  rounded-[10px] m-2  bg-customLilaBg  text-customPurpure hover:bg-customHover hover:text-white">
            <FontAwesomeIcon icon={faCopy} />
          </button>
          <p className="text-[11px]">
            Copiar
            <br />
            CBU
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default SetButtoms;
