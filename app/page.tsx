import Image from "next/image";
import client from "@/data/client.json";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Universal Solar – Luis Cintrón
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Representante Autorizado en Ponce
            </p>

            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Instalación profesional de calentadores solares,
              cisternas y sistemas fotovoltaicos residenciales.
              Soluciones diseñadas para eficiencia, ahorro y durabilidad.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${client.whatsapp}`}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition"
              >
                Evaluación personalizada
              </a>

              <a
                href={`tel:${client.phone}`}
                className="bg-gray-900 text-white px-6 py-3 rounded-full transition"
              >
                Llamar ahora
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/solar1.jpg"
              alt="Instalación Solar"
              width={700}
              height={500}
              className="rounded-3xl shadow-2xl object-cover w-full"
              priority
            />
          </div>

        </div>
      </section>


      {/* TRUST STRIP */}
      <section className="bg-gray-100 py-6 text-center font-medium text-gray-700">
        ✔ Instalación profesional &nbsp; | &nbsp;
        ✔ Equipos certificados &nbsp; | &nbsp;
        ✔ Evaluación sin compromiso
      </section>


      {/* SERVICIOS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

          <Service
            title="Calentadores Solares"
            text="Agua caliente todo el año reduciendo consumo eléctrico."
          />

          <Service
            title="Cisternas Residenciales"
            text="Almacenamiento seguro ante interrupciones del servicio."
          />

          <Service
            title="Sistemas Fotovoltaicos"
            text="Paneles solares para mayor independencia energética."
          />

        </div>
      </section>


      {/* GALERÍA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <GalleryImage src="/solar1.jpg" />
          <GalleryImage src="/solar2.jpg" />
          <GalleryImage src="/solar3.jpg" />

        </div>
      </section>


      {/* INCENTIVO */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">
            Incentivo disponible hasta $550
          </h2>

          <p className="mt-4 text-gray-600">
            Programa vigente sujeto a elegibilidad del cliente.
          </p>
        </div>
      </section>


      {/* CTA FINAL */}
      <section className="bg-green-700 py-24 text-white text-center">
        <h2 className="text-3xl font-semibold">
          Coordina tu evaluación personalizada
        </h2>

        <p className="mt-6 text-white/90">
          Atención directa en Ponce y pueblos cercanos
        </p>

        <a
          href={`https://wa.me/${client.whatsapp}`}
          className="mt-10 inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          WhatsApp Directo
        </a>
      </section>

    </main>
  );
}


function Service({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

function GalleryImage({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg">
      <Image
        src={src}
        alt="Proyecto Universal Solar"
        width={1200}
        height={800}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
