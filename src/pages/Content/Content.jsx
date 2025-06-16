import { useParams } from "react-router-dom";
// import kegiatanData from "/json/JsonKegiatan.json";
// import artefakData from "/json/JsonArtefak.json";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import "./Content.css";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="goBackBtn">
      ← Kembali
    </button>
  );
}

function Content() {
  const { type, id } = useParams();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchData();
  }, [type, id]);

  const fetchData = async () => {
    try {
      const res = await fetch(`/json/Json${capitalize(type)}.json`);
      const json = await res.json();
      const item = json[type].find((d) => d.id === parseInt(id));
      if (!item) {
        setNotFound(true);
      } else {
        setData(item);
      }
    } catch (error) {
      console.error("Failed to fetch content:", error);
      setNotFound(true);
    }
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  if (notFound) {
    return <h1>404 - Konten tidak ditemukan</h1>;
  }

  if (!data) {
    return <p>Loading konten...</p>;
  }

  return (
    <div className="contentSect">
      <GoBackButton />
      <div className="contentFlex">
        <img src={data.image} alt={data.nama} className="contentImage" />
        <div>
          <h2>{data.nama}</h2>
          {data.deskripsi && <p>{data.deskripsi}</p>}
          {data.kategori && (
            <p><strong>Kategori:</strong> {data.kategori}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
