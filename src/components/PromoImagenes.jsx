import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PromoImagenes() {
  return (
    <div className="flex justify-between flex-row-reverse items-center border shadow-md m-2 mt-4 rounded-[10px] p-4 bg-white">
      {/* text */}
      <div className="ml-8">
        <div>Este mes ahora mas de $3000 con nuestra promo</div>
        <div className="font-bold">Conocer mas</div>
      </div>
      {/* image / icon */}
      <div className="text-4xl ">
        <FontAwesomeIcon icon={faCreditCard} />
      </div>
      
    </div>
  )
}

export default PromoImagenes