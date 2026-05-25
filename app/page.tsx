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
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Erudites <br />
          GEOConsults
        </h1>

        <p
          style={{
            fontSize: "24px",
            maxWidth: "800px",
            lineHeight: "1.6",
            color: "#d4d4d4",
          }}
        >
          Professional Surveying & Geospatial Solutions
        </p>

        <p
          style={{
            marginTop: "30px",
            fontSize: "18px",
            color: "#9dd7b5",
          }}
        >
          "mapping into reality."
        </p>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "850px",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Innovation, precision, accuracy and excellence — delivering
          authoritative geospatial solutions across Nigeria and West Africa.
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
            href="https://wa.me/2347038622672"
            style={{
              background: "#0f5132",
              color: "white",
              padding: "16px 28px",
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
              padding: "16px 28px",
              borderRadius: "10px",
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
          background: "#06281d",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
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
              fontSize: "18px",
              maxWidth: "900px",
              color: "#d8d8d8",
            }}
          >
            Erudites GeoConsults is a premier team of certified surveyors and
            GIS specialists delivering accurate, reliable geospatial solutions
            across Nigeria and West Africa.
          </p>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.9",
              fontSize: "18px",
              maxWidth: "900px",
              color: "#d8d8d8",
            }}
          >
            We combine decades of field experience with cutting-edge
            technology—from drone photogrammetry to advanced GIS analytics—to
            provide the critical data foundations for complex engineering,
            construction, and development projects.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "CAC Registered Business",
              "Certified Surveyors",
              "Nigeria & West Africa",
              "Educational Support",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#0b3b2a",
                  padding: "20px",
                  borderRadius: "12px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "40px",
            }}
          >
            Comprehensive Geospatial Services
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
              "Topographic Mapping",
              "GIS & Remote Sensing",
              "Boundary Demarcation",
              "Drone Surveys",
              "Environmental Assessment",
              "Engineering Survey",
              "Geospatial Data Analysis",
              "Educational Support",
              "E-Commerce Training",
            ].map((service) => (
              <div
                key={service}
                style={{
                  background: "#06281d",
                  padding: "25px",
                  borderRadius: "14px",
                }}
              >
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "80px 20px",
          background: "#06281d",
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
            Ready to start your next project?
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#d7d7d7",
            }}
          >
            Connect with our team of geospatial experts to discuss your
            requirements, request a survey, or get a comprehensive project
            quote.
          </p>

          <div
            style={{
              marginTop: "40px",
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            <p>
              <strong>Head Office:</strong> 20 UNIZIK Lock-Up Shops, Ifite
              Awka, Awka-Ifite, Anambra, Nigeria
            </p>

            <p>
              <strong>Phone:</strong> +234 703 862 2672 | +234 808 390 5789
            </p>

            <p>
              <strong>Email:</strong> admin@eruditesgeoconsults.com
            </p>
          </div>

          <a
            href="https://wa.me/2347038622672"
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
        </div>
      </section>
    </main>
  );
      }
