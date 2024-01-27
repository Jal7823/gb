import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

function Navbar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/balance/pesos/"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <nav className="bg-customPurpure border-gray-200 dark:bg-customPurpure ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a
          href="/index"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" className="h-8" alt="Flowbite Logo" />

          {data ? (
            data.map((el) => (
              <div key={el.id}>
                <span className="self-center text-white font-semibold whitespace-nowrap dark:text-white">
                  {el.costumer_lastname}
                </span>
              </div>
            ))
          ) : (
            <p>Loading...</p> // Puedes mostrar un mensaje de carga o algo similar
          )}
        </a>
        <div className="text-white text-[20px]">
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
