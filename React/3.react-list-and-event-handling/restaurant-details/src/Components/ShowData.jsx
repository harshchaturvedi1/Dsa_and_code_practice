import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CardDetails } from "./Card";

export const ShowData = ({ restData }) => {
  const [page, setPage] = useState(1);
  const [tempData, setTempData] = useState([]);

  const handleDataByPage = () => {
    let temp = [];
    let init = 5 * (page - 1);
    let end = 5 * page;
    // limits according to page
    for (let i = init; i < end && i < restData.length; i++) {
      temp.push(restData[i]);
    }
    setTempData([...temp]);
  };

  useEffect(() => {
    handleDataByPage();
  }, [page]);

  return (
    <>
      <Link to="/addNew">Add restaurant</Link>
      {/* filters options */}
      <div
        style={{
          border: "1px solid",
          margin: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* displaying each data */}
        {tempData.map((item) => (
          <CardDetails restaurant={item} key={item.id} />
        ))}
      </div>
      <PrevButton page={page} setPage={setPage} />
      <NextButton page={page} setPage={setPage} restData={restData} />
    </>
  );
};

const PrevButton = ({ page, setPage }) => {
  return (
    <>
      <button
        disabled={page === 1 ? true : false}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
    </>
  );
};

const NextButton = ({ page, setPage, restData }) => {
  return (
    <>
      <button
        disabled={page >= restData.length / 5 ? true : false}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};
