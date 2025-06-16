import { useEffect, useState } from "react";
import CardView from "../../components/CardView";

// import artefakData from "/json/JsonArtefak.json"
// import kegiatanData from "/json/JsonKegiatan.json"
import "./Home.css"
// import Content from "../../pages/Content/Content";


function LandingSection() {
    const [data, setData] = useState({})
    useEffect(() => {
    fetchData()
    }, []);
    
    const fetchData = async () =>{
        const res = await fetch("/json/JsonArtefak.json");
        const dat = await res.json();
        setData(dat.artefak);
        console.log(dat.artefak);
    }
    return (
        <section>
            <div className="landingSect">
                <img src="/assets/images/landing.jpg" />
                <div className="landingGradient"></div>
                <div className="landingText">
                    <h3>Selamat datang di</h3>
                    <h1>Museum Nasional <br/> Indonesia</h1>
                    <h3>Semua sejarah berada pada satu tempat</h3>
                </div>
            </div>
        </section>
    );
}

function ArtefakOfTheDay() {
    const [randomArtefak, setRandomArtefak] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch("/json/JsonArtefak.json");
            const dat = await res.json();
            const items = dat.artefak;
            const random = items[Math.floor(Math.random() * items.length)];
            setRandomArtefak(random);
        } catch (error) {
            console.error("Failed to fetch artefak data:", error);
        }
    };

    if (!randomArtefak) {
        return <div>Loading Artefak of the Day...</div>;
    }

    return (
        <section className="artefakSection">
            <div className="artefakLeft">
                <img src={randomArtefak.image} alt={randomArtefak.nama} className="artefakImage" />
                <div className="artefakGradient"></div>
            </div>
            <div className="artefakRight">
                <h2>Artefak of The Day</h2>
                <h2>{randomArtefak.nama}</h2>
            </div>
        </section>
    );
}

function Kegiatan() {
    const [kegiatan, setKegiatan] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch("/json/JsonKegiatan.json");
            const data = await res.json();
            setKegiatan(data.kegiatan);
        } catch (error) {
            console.error("Failed to fetch kegiatan:", error);
        }
    };

    return (
        <section>
            <div className="contentSect">
                <h2>Kegiatan di Museum Nasional</h2>
                <div className="listKegiatan">
                    {kegiatan.length === 0 ? (
                        <p>Loading kegiatan...</p>
                    ) : (
                        kegiatan.slice(0, 4).map((item) => (
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
        </section>
    );
}

function Home() {
    return (
        <>
            <div className="homePage">
                <LandingSection />
                <ArtefakOfTheDay />
                <Kegiatan />
            </div>
        </>
    );
}

export default Home;
