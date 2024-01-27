import BottomIcons from "../components/BottomIcons";
import Account from "../components/Account";
import Pro from "../components/Pro";
import PromoImagenes from "../components/PromoImagenes";
import Publicity from "../components/Publicity";
import Title from "../components/Title";
import StatusAccount from "../components/StatusAccount";

import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Index() {
  let content1 = "Este mes ahorraste mas de $ 3.000 con nuestras promos";
  let content2 = "Conoce mas";
  let content3 = "Inverti en Fima desde $ 100 y ahorra para e futuro";
  let content4 = "Conocer opciones";
  let color2 = "bg-customPink";
  let color1 = "bg-customPromos";




  return (
    <>
      <div>
        <Account />
        <Publicity text1={content1} text2={content2} color={color1} icon={faCreditCard} />
        <BottomIcons />
        <div className="flex justify-between m-3 items-center mt-4">
          <Title text="Promociones Destacada" />
          <p className="text-customPurpure">Ir a beneficios</p>
        </div>
        <Pro />
        <StatusAccount />
        <Publicity text1={content3} text2={content4} color={color2} icon={faBagShopping}/>
      </div>
    </>
  );
}

export default Index;
