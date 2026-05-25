import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071a12] text-white">
      <Header />

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight">
          Precision Surveying,
          <br />
          GIS & Geospatial Solutions
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Erudites GeoConsults delivers professional land surveying,
          GIS mapping, engineering measurements, and geospatial
          consultancy services with modern technology and precision.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-black font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
