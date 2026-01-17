import { Link } from "wouter";

interface HotspotProps {
  to: string;
  title: string;
  style: React.CSSProperties;
  external?: boolean;
}

function Hotspot({ to, title, style, external }: HotspotProps) {
  const baseStyle: React.CSSProperties = {
    position: "absolute",
    cursor: "pointer",
    backgroundColor: "transparent",
    zIndex: 10,
    ...style,
  };

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        style={baseStyle}
        className="hotspot"
      />
    );
  }

  return (
    <Link href={to} title={title} style={baseStyle} className="hotspot" />
  );
}

export default function LandingPage() {
  return (
    <>
      <style>{`
        .landing-container {
          position: relative;
          height: 100vh;
          aspect-ratio: 1.55;
          max-width: 100%;
        }
        .landing-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .hotspot:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
      <div
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="landing-container">
          <img
            src="/assets/bosch_triptych_user.png"
            alt="Cathedral of Documents Triptych"
            className="landing-image"
          />

          {/* The Cathedral */}
          <Hotspot
            to="/cathedral"
            title="The Cathedral"
            style={{ top: "29%", left: "6%", width: "18%", height: "5%" }}
          />

          {/* The Ruling */}
          <Hotspot
            to="/ruling"
            title="The Ruling"
            style={{ top: "35%", left: "9%", width: "15%", height: "5%" }}
          />

          {/* The Endgame */}
          <Hotspot
            to="/endgame"
            title="The Endgame"
            style={{ top: "29%", right: "6%", width: "18%", height: "5%" }}
          />

          {/* The Academy */}
          <Hotspot
            to="/academy"
            title="The Academy"
            style={{ top: "35%", right: "9%", width: "15%", height: "5%" }}
          />
        </div>
      </div>
    </>
  );
}
