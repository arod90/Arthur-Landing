import Image from 'next/image';
import './landing.css';

export default function Home() {
  return (
    <main className="main">
      <header>
        <div className="huella">
          <img
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
        <img
          className="donaciones-fill"
          src="/assets/fill.svg"
          alt="relleno de el plato"
        />
      </section>
    </main>
  );
}
// q7fxX%{)MjI8
