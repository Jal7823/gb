import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

const LoadingPage = () => {
  const [loadingText, setLoadingText] = useState("Cargando...");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingText(
        <div>
          <div className="border-4 border-red-500 rounded-full inline-block">
            <FontAwesomeIcon
              className="text-yellow-300 text-[90px] p-6 "
              icon={faScrewdriverWrench}
            />
          </div>
          <p className="text-red-500 mt-8">
            Le ofrecemos disculpas. En este momento, experimentamos fallas
            tecnicas, por favor intente mas tarde.
          </p>
        </div>
      );
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="m-8 flex items-center justify-center animate-pulse">
          <div className="text-2xl text-center font-semibold">
            {loadingText}
            <span className=""></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
