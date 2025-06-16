import "./Event.css";
import "../../components/CardView.css";
import { useEffect, useState } from 'react';
import CardView from "../../components/CardView";
// import kegiatanData from "../../json/JsonKegiatan.json";

function Collection() {
  const [kegiatanList, setKegiatanList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/json/JsonKegiatan.json');
      const data = await res.json();
      setKegiatanList(data.kegiatan);
    } catch (error) {
      console.error('Gagal memuat data kegiatan:', error);
    }
  };

  return (
    <div className="Event-page">
      <h1 className="Event-title">Kegiatan</h1>
      <div className="Event-grid">
        {kegiatanList.length === 0 ? (
          <p>Memuat kegiatan...</p>
        ) : (
          kegiatanList.map((item) => (
            <CardView
              key={item.id}
              id={item.id}
              title={item.nama}
              image={item.image}
              type="kegiatan"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Collection;