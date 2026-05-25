const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};
export default function HomePage() {
  return (
    <main
      style={{
        background: "#021f16",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >{/* NAVBAR */}
<header
  style={{
    padding: "20px",
    borderBottom: "1px solid #0f5132",
    position: "sticky",
    top: 0,
    background: "#021f16",
    zIndex: 1000,
  }}
>
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <img
  src="/file_00000000a318720aac3fde87252ef7f3_1778973965455.png"
  alt="EGC Logo"
  style={{
    width: "60px",
    height: "60px",
    objectFit: "contain",
  }}
/>
  <div>
    <h2
      style={{
        margin: 0,
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      EGC
    </h2>

    <p
      style={{
        margin: 0,
        fontSize: "12px",
        color: "#cbd5e1",
      }}
    >
      Erudites GeoConsults
    </p>
  </div>
</div>

    <nav
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <a href="#" style={navLink}>
        Home
      </a>

      <a href="#about" style={navLink}>
        About
      </a>

      <a href="#services" style={navLink}>
        Services
      </a>

      <a href="#contact" style={navLink}>
        Contact
      </a>
    </nav>
  </div>
</header>
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
            fontSize: "55px",
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
            fontSize: "20px",
            color: "#d1d5db",
            marginBottom: "20px",
          }}
        >
          Professional Surveying & Geospatial Solutions
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#cbd5e1",
            maxWidth: "700px",
          }}
        >
          Innovation, precision, accuracy and excellence delivering
          authoritative geospatial solutions across Nigeria and West Africa.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/2347038622672"
            style={{
              background: "#0f5132",
              color: "white",
              padding: "15px 28px",
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
              border: "1px solid #0f5132",
              color: "white",
              padding: "15px 28px",
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
          padding: "70px 20px",
          background: "#052e22",
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
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            About Erudites GEOConsults
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#d1d5db",
              maxWidth: "900px",
            }}
          >
            Erudites GEOConsults is a professional geospatial and surveying
            company focused on delivering accurate land surveying, engineering
            surveying, GIS mapping, topographic surveys, property documentation,
            and construction layout solutions with modern technology and
            industry-standard precision.
          </p>
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
              fontSize: "40px",
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
              "Engineering Survey",
              "Topographic Mapping",
              "GIS & Geospatial Analysis",
              "Construction Setting Out",
              "Property Documentation",
              "Drone Mapping",
              "Real Estate Consultancy",
            ].map((service) => (
              <div
                key={service}
                style={{
                  background: "#0a3d2d",
                  padding: "25px",
                  borderRadius: "15px",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    marginBottom: "10px",
                  }}
                >
                  {service}
                </h3>

                <p
                  style={{
                    color: "#d1d5db",
                    lineHeight: "1.7",
                  }}
                >
                  Professional and accurate service delivery using modern
                  geospatial technologies and best practices.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "80px 20px",
          background: "#052e22",
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
              fontSize: "45px",
              marginBottom: "25px",
            }}
          >
            Ready to start your next project?
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#d1d5db",
              maxWidth: "800px",
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
              fontSize: "20px",
            }}
          >
            <p>
              <strong>Head Office:</strong> 20 UNIZIK Lock-Up Shops, Ifite
              Awka, Awka-Iflite, Anambra, Nigeria
            </p>

            <p>
              <strong>Phone:</strong> +234 703 862 2672 | +234 808 390 5789
            </p>

            <p>
              <strong>Email:</strong> admin@eruditesgeoconsults.com
            </p>
          </div>

          {/* SOCIAL BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            {[
              "WhatsApp",
              "Facebook",
              "Instagram",
              "TikTok",
              "Telegram",
            ].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  background: "#0f5132",
                  color: "white",
                  padding: "18px 30px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  minWidth: "140px",
                  textAlign: "center",
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
