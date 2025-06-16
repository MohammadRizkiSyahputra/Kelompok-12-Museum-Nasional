import "./Collection.css";
import "../../components/CardView.css";
import { useEffect, useState } from 'react';
import CardView from "../../components/CardView";
// import kegiatanData from "../../json/JsonArtefak.json";

function Collection() {
  const [artefakList, setArtefakList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/json/JsonArtefak.json');
      const data = await res.json();
      setArtefakList(data.artefak);
    } catch (error) {
      console.error('Gagal memuat data artefak:', error);
    }
  };

  return (
    <div className="collection-page">
      <h1 className="collection-title">Koleksi</h1>
      <div className="collection-grid">
        {artefakList.length === 0 ? (
          <p>Memuat koleksi...</p>
        ) : (
          artefakList.map((item) => (
            <CardView
              key={item.id}
              id={item.id}
              title={item.nama}
              image={item.image}
              type="artefak"
            />
          ))
        )}
      </div>
    </div>
  );
}


export default Collection;