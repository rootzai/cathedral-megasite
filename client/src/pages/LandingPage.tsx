export default function LandingPage() {
  return (
    <>
      <style>{`
        .landing-container {
          position: relative;
          height: 100vh;
          width: 100%;
          background-color: black;
          background-image: url('/assets/bosch_triptych_clean.jpg');
          background-size: contain;
          background-position: center 10%;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 15vh;
        }
        
        @media (min-width: 1024px) {
          .landing-container {
            background-size: cover;
            background-position: center;
            padding-top: 12vh;
          }
        }
        
        .title-block {
          text-align: center;
          z-index: 10;
          pointer-events: none;
        }

        .title-overlay {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(3rem, 8vw, 7rem);
          color: #faf6ee;
          letter-spacing: 0.15em;
          text-shadow: 0px 8px 30px rgba(0, 0, 0, 0.9), 0px 4px 15px rgba(0, 0, 0, 0.7);
          text-transform: uppercase;
          line-height: 1;
          margin: 0;
        }

        .subtitle-overlay {
          font-family: 'Lora', serif;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: rgba(250, 246, 238, 0.8);
          letter-spacing: 0.4em;
          margin-top: 1rem;
          font-style: italic;
          text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
          text-transform: uppercase;
        }
      `}</style>
      <div className="landing-container">
        <div className="title-block">
          <h1 className="title-overlay">Sodom Hall</h1>
          <p className="subtitle-overlay">The Architecture of Silence</p>
        </div>
      </div>
    </>
  );
}
