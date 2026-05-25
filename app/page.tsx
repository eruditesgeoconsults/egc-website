export default function HomePage() {
  return (
    <main style={{
      background: "#071a12",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize: "48px", marginBottom: "20px"}}>
        Erudites GeoConsults
      </h1>

      <p style={{fontSize: "20px", maxWidth: "700px"}}>
        Professional GIS, Surveying, Mapping, Engineering and Geospatial Solutions Company.
      </p>

      <div style={{marginTop: "40px"}}>
        <a
          href="https://wa.me/"
          style={{
            background: "#0f5132",
            color: "white",
            padding: "14px 24px",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
