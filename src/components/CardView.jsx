import "../index.css";
import "./CardView.css";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function CardView({ id, type }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id, type]);

  const fetchData = async () => {
    try {
      const res = await fetch(`/json/Json${capitalize(type)}.json`);
      const json = await res.json();
      const item = json[type].find((item) => item.id === id);
      setData(item);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  if (!data) return <div>Loading...</div>;

  return (
    <Link to={`/${type}/${id}`} className="cardView">
      <div className="card">
        <div className="bgCardText"></div>
        <h3>{data.nama}</h3>
        <img src={data.image} alt={data.nama} />
      </div>
    </Link>
  );
}

export default CardView;
