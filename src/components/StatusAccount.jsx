import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatusAccount() {
  return (
    <div className="flex justify-between flex-row-reverse items-center border shadow-md m-2 mt-4 rounded-[10px] p-4 bg-white">
      {/* text */}
      <div className=" text-center">
      <div className="font-bold text-[18px]">No tenes vencimiento en los proximos 3 dias </div>

        <div>Colsulta todos los movimientos del mes o agrega servicios a la seccion de servicios</div>
      </div>
      
      
    </div>
  )
}

export default StatusAccount