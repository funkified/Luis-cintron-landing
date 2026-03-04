
import LeadForm from "./components/LeadForm";
import Image from "next/image";
import client from "@/data/client.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <Image
        src="/logo.svg"
        alt="Universal Solar"
        width={90}
        height={90}
        className="mb-6"
        />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Universal Solar 
              – Luis Cintrón
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Representante Autorizado en Ponce
            </p>

            <p className="mt-6 text-lg text-gray-700">
              Instalación profesional de calentadores solares y cisternas
              para tu hogar.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${client.phone}`}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold text-center"
              >
                Llamar Ahora
              </a>

              <a
                href={`https://wa.me/${client.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/solar1.jpg"
              alt="Calentador Solar"
              width={600}
              height={500}
              className="rounded-xl shadow-xl object-cover w-full"
              priority
            />
          </div>

        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-yellow-500 text-black py-4 text-center font-semibold">
        ✔ Instalación profesional &nbsp; | &nbsp; ✔ Productos duraderos &nbsp; | &nbsp; ✔ Evaluación gratuita
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <Service
            title="Calentadores Solares"
            text="Agua caliente todo el año reduciendo el consumo eléctrico del hogar."
          />

          <Service
            title="Cisternas Residenciales"
            text="Almacenamiento seguro de agua para proteger tu hogar ante cortes."
          />

          <Service
            title="Instalación Profesional"
            text="Equipo técnico especializado para instalación rápida y segura."
          />

          <Service
            title="Evaluación Gratuita"
            text="Orientación y cotización sin compromiso."
          />

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <GalleryImage src="/solar1.jpg" />
          <GalleryImage src="/solar2.jpg" />
          <GalleryImage src="/solar3.jpg" />

        </div>
      </section>
<LeadForm />      
      {/* CTA FINAL */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-2xl font-bold">
          Agenda abierta para evaluaciones esta semana
        </h2>

        <p className="mt-4 text-gray-600">
          Contáctanos hoy para coordinar tu evaluación gratuita.
        </p>
      </section>

      {/* ZONE */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Zona de Servicio</h2>

        <p className="mt-6 text-lg text-gray-600">
          Ponce y pueblos cercanos
        </p>
      </section>

    </main>
  );
}


/* ---------- COMPONENTS ---------- */

function Service({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}

function GalleryImage({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg">
      <Image
        src={src}
        alt="Instalación realizada"
        width={1200}
        height={800}
        className="object-cover w-full h-full"
      />
    </div>
  );
}