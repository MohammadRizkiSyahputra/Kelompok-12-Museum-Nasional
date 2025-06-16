import "./Collection.css";
import "../../components/CardView.css";
import CardView from "../../components/CardView";
// import kegiatanData from "../../json/JsonArtefak.json";

function Collection() {
  return (
    <div className="collection-page">
      <h1 className="collection-title">Koleksi</h1>
      <div className="collection-grid">
        {/* {kegiatanData.artefak.map((item) => (
          <CardView
            key={item.id}
            id={item.id}
            title={item.nama}
            image={item.image}
            type="artefak"
          />
        ))} */}
      </div>
    </div>
  );
}

export default Collection;