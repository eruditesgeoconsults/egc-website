export default function HomePage() {
  return (
    <main
      style={{
        background: "#021f16",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            lineHeight: "1.1",
            marginBottom: "20px",
          }}
        >
          Erudites <br />
          GEOConsults
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginBottom: "20px",
            color: "#d0d0d0",
          }}
        >
          Professional Surveying & Geospatial Solutions
        </p>

        <p
          style={{
            maxWidth: "700px",
            lineHeight: "1.8",
            color: "#cccccc",
            marginBottom: "40px",
          }}
        >
          Innovation, precision, accuracy and excellence delivering
          authoritative geospatial solutions across Nigeria and West Africa.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              background: "#0f5132",
              color: "white",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </a>

          <a
            href="#about"
            style={{
              border: "1px solid #ffffff55",
              color: "white",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            About Us
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "60px 20px",
          background: "#052d20",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            Founded on precision. Built on trust.
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#dddddd",
              fontSize: "18px",
            }}
          >
            Erudites GEOConsults provides professional land surveying,
            engineering surveying, GIS mapping, drone mapping, property
            documentation, geospatial analysis and consultancy services with
            accuracy and integrity.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "52px",
              marginBottom: "30px",
              lineHeight: "1.2",
            }}
          >
            Ready to start your next project?
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#d0d0d0",
              marginBottom: "40px",
            }}
          >
            Connect with our team of geospatial experts to discuss your
            requirements, request a survey, or get a comprehensive project
            quote.
          </p>

          <div
            style={{
              lineHeight: "2",
              fontSize: "20px",
            }}
          >
            <p>
              <strong>Head Office:</strong> 20 UNIZIK Lock-Up Shops,
              Ifite Awka, Awka-Ifite, Anambra, Nigeria
            </p>

            <p>
              <strong>Phone:</strong> +234 703 862 2672 | +234 808 390 5789
            </p>

            <p>
              <strong>Email:</strong> admin@eruditesgeoconsults.com
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <a
              href="https://wa.me/2347038622672"
              target="_blank"
              style={buttonStyle}
            >
              WhatsApp
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              style={buttonStyle}
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              style={buttonStyle}
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              style={buttonStyle}
            >
              TikTok
            </a>

            <a
              href="https://t.me/Emmadeseeker"
              target="_blank"
              style={buttonStyle}
            >
              Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const buttonStyle = {
  background: "#0f5132",
  color: "white",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
};
