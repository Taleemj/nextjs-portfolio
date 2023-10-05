import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import HEX_DATA from "./data/countries_hex_data.json";
import Globe from "react-globe.gl";

export default function CustomGlobe() {
  const globeEl = useRef();
  const [hex, setHex] = useState({ features: [] });

  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      hexPolygonsData={hex.features}
      hexPolygonResolution={3}
      globeImageUrl={"/assets/earth.jpg"}
      backgroundImageUrl={"assets/nightsky.png"}
      height={window.innerWidth > 1000 ? 680 : 450}
      width={window.innerWidth > 1000 ? 680 : window.innerWidth}
      showAtmosphere={true}
      atmosphereColor={"cyan"}
      atmosphereAltitude={0.23}
      hexPolygonMargin={0.62}
      hexPolygonColor={useCallback(() => "#29b9f0ff", [])}
    />
  );
}
