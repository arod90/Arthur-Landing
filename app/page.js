import Script from 'next/script';
import './landing.css';
import MapComponent from './map/MapComponent';

export default function Home() {
  return (
    <main className="main">
      <Script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=console.debug&libraries=maps,marker&v=beta`}
      ></Script>
      <header>
        <div className="huella">
          <img
            className="huella-img"
            src="/assets/huella.svg"
            alt="logotipo procan la huella de arthur"
          />
        </div>
        <div className="procan">
          <img
            className="logo-procan"
            src="/assets/procan.svg"
            alt="logotipo procan la huella de arthur"
          />
        </div>
      </header>
      <section className="hero">
        <div className="hero-text">
          <img
            className="title"
            src="/assets/title.svg"
            alt="Descubre la huella de Arthur la huella del amor incondicional"
          />
          <span className="compras">
            Tus compras del 15 de marzo al 31 de mayo nos permitirán donar{' '}
            <span className="compras-bold">150.000 raciones de alimento</span>{' '}
            para los perritos más necesitados.
          </span>
          <span className="sumate">
            ¡Súmate y ayúdanos a llegar al objetivo!
          </span>
        </div>
        <div className="paw-pic">
          <img
            className="paw-pic-img"
            src="/assets/pawpic.svg"
            alt="imagen de una huella que contiene un hombre de espaldas y su perro"
          />
        </div>
      </section>
      <section className="donaciones">
        <img
          className="donaciones-title"
          src="/assets/donaciones.svg"
          alt="mira el avance de las donaciones"
        />
        <img
          className="donaciones-plato"
          src="/assets/plato.svg"
          alt="grafica de un plato de alimento de mascota"
        />
        {/* TODO ask isa to generate various fills incorporated to the plate */}
        {/* <img
          className="donaciones-fill"
          src="/assets/fill.svg"
          alt="relleno de el plato"
        /> */}
      </section>
      <section className="quien">
        <img
          className="quine-title"
          src="/assets/quien/quienes.svg"
          alt="Quien es Arthur?"
        />
        <div className="pic-cont-desk">
          <div className="top-desk">
            <img
              className="foto1-desk"
              src="/assets/quien/foto1.svg"
              alt="imagen tipo polaroid con arthur en un kayak"
            />
            <img
              className="foto2-desk"
              src="/assets/quien/foto2.svg"
              alt="imagen tipo polaroid de arthur mirando a su dueno"
            />
            <img
              className="foto3-desk"
              src="/assets/quien/foto3.svg"
              alt="imagen tipo polaroid de arthur con un ocaso"
            />
          </div>
          <div className="bottom-desk">
            <img
              className="text1-desk"
              src="/assets/quien/text1-desk.svg"
              alt="imagen tipo polaroid de arthur con un ocaso"
            />
            <img
              className="text2-desk"
              src="/assets/quien/text2-desk.svg"
              alt="imagen tipo polaroid de arthur con un ocaso"
            />
            <img
              className="text3-desk"
              src="/assets/quien/text3-desk.svg"
              alt="imagen tipo polaroid de arthur con un ocaso"
            />
            <img
              className="text4-desk"
              src="/assets/quien/text4-desk.svg"
              alt="imagen tipo polaroid de arthur con un ocaso"
            />
          </div>
        </div>
        <img
          className="placeholder-desk"
          src="/assets/quien/placeholder.svg"
          alt="placeholder"
        />
      </section>
      <section className="trailer">
        <img
          className="poster-desk"
          src="/assets/trailer/cover.svg"
          alt="placeholder"
        />
        <img
          className="mira-desk"
          src="/assets/trailer/mira.svg"
          alt="placeholder"
        />
        <div className="iframe-cont">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/wjDJNEPghNY?si=XVnVpSGE4heRIjS0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <span>ARTHUR | TRAILER OFICIAL</span>
        </div>
      </section>
      <section className="donacion">
        <img
          className="dona-desk"
          src="/assets/donacion/comodonar.svg"
          alt="placeholder"
        />
        <div className="map-cont" id="map">
          {/* <MapComponent /> */}
          <gmp-map
            style={{ borderRadius: '10px', width: '90%', overflow: 'hidden' }}
            center="-0.1646224409341812,-78.46732330322266"
            zoom="16"
            map-id="DEMO_MAP_ID"
          >
            <gmp-advanced-marker
              position="-0.1646224409341812,-78.46732330322266"
              title="My location"
            ></gmp-advanced-marker>
          </gmp-map>
        </div>
      </section>
    </main>
  );
}
// q7fxX%{)MjI8
