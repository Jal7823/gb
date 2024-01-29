import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Movements() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10; // Puedes ajustar esto según tus necesidades

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gb-tau-sable.vercel.app/balance/movements/"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayedData = data.slice(
    pageNumber * itemsPerPage,
    (pageNumber + 1) * itemsPerPage
  );

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Saldo
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((el) => (
              <tr
                key={el.id}
                className={`${
                  el.id % 2 === 0
                    ? "even:bg-gray-50 even:dark:bg-gray-800"
                    : "odd:bg-white odd:dark:bg-gray-900"
                } border-b dark:border-gray-700`}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {el.date}
                </td>
                <td className="px-6 py-4">{el.descriptions}</td>
                <td
                  className={`px-6 py-4 ${
                    el.amount.includes("-") ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {el.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <ReactPaginate
        className=" flex gap-4 bg-customLilaBg border-customPurpure rounded-md p-3 w-100"
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          pageClassName={"page-item"}
          breakClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
        />
      </div>
    </div>
  );
}

export default Movements;
