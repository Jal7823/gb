import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// api
import axios from "axios";
import { useEffect, useState } from "react";
import SetButtoms from "./SetButtoms";

function Bottoms() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gbbend.pythonanywhere.com/balance/pesos/"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const formatNumber = (number) => {
    return number.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    });
  };
  console.log(data);

  return (
    <>
      <div className="border p-2 border-gray-300 m-2 rounded-[10px] shadow-md">
        {/* balance */}
        <div className="ml-2">
          <span className="text-customPurpure-400/50">
            CC $ {data?.[0]?.account_number || 0}{" "}
          </span>
          <div className="flex justify-between mr-2">
            <p className="font-bold text-2xl">
              ${showBalance ? formatNumber(data?.[0]?.amount || 0) : "***"}
            </p>
            <p
              className="text-1xl text-customPurpure"
              onClick={toggleBalanceVisibility}
            >
              <FontAwesomeIcon icon={showBalance ? faEye : faEyeSlash} />
            </p>
          </div>
        </div>
        {/* buttoms */}
        <SetButtoms />
        <hr className="mt-4" />

        <div className="flex justify-between items-center">
          <p className="m-2">Cuentas</p>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
      </div>
    </>
  );
}

export default Bottoms;
