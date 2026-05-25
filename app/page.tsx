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
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Erudites GEOConsults
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.8",
            maxWidth: "700px",
            color: "#d1d5db",
          }}
        >
          Professional Surveying & Geospatial Solutions.
          <br />
          Mapping into reality with precision, innovation,
          and excellence across Nigeria and West Africa.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              background: "#0f5132",
              padding: "16px 28px",
              borderRadius: "10px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </a>

          <a
            href="#about"
            style={{
              border: "1px solid white",
              padding: "16px 28px",
              borderRadius: "10px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            About Us
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        style={{
          padding: "80px 20px",
          background: "#063321",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Founded on precision. Built on trust.
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#d1d5db",
            }}
          >
            Erudites GEOConsults delivers professional
            land surveying, GIS mapping, topographic
            surveys, engineering surveys, construction
            support, and geospatial consultancy services.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "40px",
            }}
          >
            Our Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "Land Surveying",
              "GIS & Mapping",
              "Topographic Survey",
              "Engineering Survey",
              "Construction Support",
              "Road & Building Projects",
              "Property Documentation",
              "Geospatial Consultancy",
            ].map((service) => (
              <div
                key={service}
                style={{
                  background: "#0a3d2a",
                  padding: "30px",
                  borderRadius: "14px",
                }}
              >
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          background: "#063321",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Ready to start your next project?
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#d1d5db",
            }}
          >
            Connect with our team of geospatial experts
            to discuss your requirements, request a survey,
            or get a comprehensive project quote.
          </p>

          <div
            style={{
              marginTop: "40px",
              lineHeight: "2",
              fontSize: "1.1rem",
            }}
          >
            <p>
              <strong>Head Office:</strong> 20 UNIZIK Lock-Up Shops,
              Ifite Awka, Awka-Ifite, Anambra, Nigeria
            </p>

            <p>
              <strong>Phone:</strong> +234 703 862 2672 |
              +234 808 390 5789
            </p>

            <p>
              <strong>Email:</strong> admin@eruditesgeoconsults.com
            </p>
          </div>

          <a
            href="https://wa.me/2347038622672"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "30px",
              background: "#0f5132",
              color: "white",
              padding: "16px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Chat on WhatsApp
          </a>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.facebook.com/share/1KfQnjg6E6/"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/dieke.emmanuel.96"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@tech.surveyor"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              TikTok
            </a>

            <a
              href="https://t.me/Emmadeseeker"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              Telegram
            </a>

            <a
              href="https://www.snapchat.com/add/diekeemmanuel"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              Snapchat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
                }
