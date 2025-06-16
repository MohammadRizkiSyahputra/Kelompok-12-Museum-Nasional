import { useParams } from "react-router-dom";
// import kegiatanData from "/json/JsonKegiatan.json";
// import artefakData from "/json/JsonArtefak.json";
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

  let data = null;

  // if (type === "kegiatan") {
  //   data = kegiatanData.kegiatan.find(item => item.id === parseInt(id));
  // } else if (type === "artefak") {
  //   data = artefakData.artefak.find(item => item.id === parseInt(id));
  // }

  if (!data) {
    return <h1>404 - Konten tidak ditemukan</h1>;
  }

  return (
    <div className="contentSect">
      <GoBackButton />
      <div className="contentFlex">
        {/* <img src={data.image} alt={data.nama} className="contentImage" />
        <div>
          <h2>{data.nama}</h2>
          {data.deskripsi && <p>{data.deskripsi}</p>}
          {data.kategori && <p><strong>Kategori:</strong> {data.kategori}</p>}
        </div> */}
      </div>
    </div>
  );
}

export default Content;
