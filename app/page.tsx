import Image from "next/image";
import client from "@/data/client.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Mantenimiento de solares"
            fill
            priority
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* Gradient deluxe fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 text-white px-6 max-w-3xl">

          {/* Logo */}
          <div className="mx-auto mb-6 h-24 w-24 rounded-3xl bg-white/10 p-2 backdrop-blur-sm ring-1 ring-white/30">
            <Image
              src="/logo-juancito.svg"
              alt="Logo"
              width={96}
              height={96}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          {/* Business Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl">
            {client.businessName}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/90">
            Mantenimiento profesional para solares y terrenos amplios — resultados visibles desde la primera visita.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={`tel:${client.phone}`}
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
            >
              Solicitar Cotización Gratis
            </a>

            <a
              href={`https://wa.me/${client.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-green-600 text-white py-4 text-center font-semibold">
        ✔ Servicio puntual &nbsp; | &nbsp; ✔ Equipo profesional &nbsp; | &nbsp; ✔ Cotización gratuita
      </section>

      {/* ESPECIALIDAD */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Especialistas en Terrenos Amplios
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Nos enfocamos en el mantenimiento estructurado de solares grandes,
          fincas pequeñas y propiedades que requieren maquinaria adecuada y
          resultados visibles desde la primera visita.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <Service
            title="Mantenimiento de Solares Grandes"
            text="Corte profesional y conservación de terrenos extensos."
          />

          <Service
            title="Control de Maleza"
            text="Limpieza profunda y eliminación de crecimiento excesivo."
          />

          <Service
            title="Servicio Recurrente"
            text="Planes mensuales o mantenimiento por proyecto."
          />

          <Service
            title="Evaluación Gratis"
            text="Orientación profesional y cotización sin compromiso."
          />

        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Resultados Visibles
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Transformamos terrenos descuidados en espacios limpios,
          seguros y mantenidos profesionalmente.
        </p>
      </section>

      {/* GALERIA */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">

          <GalleryImage src="/solar1.jpg" />
          <GalleryImage src="/solar2.jpg" />
          <GalleryImage src="/solar3.jpg" />

        </div>
      </section>

      {/* URGENCY */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-2xl font-bold">
          Agenda abierta para nuevos clientes esta semana
        </h2>
        <p className="mt-4 text-gray-600">
          Contáctenos hoy para coordinar evaluación rápida.
        </p>
      </section>

      {/* ZONA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Zona de Servicio</h2>
        <p className="mt-6 text-lg text-gray-600">
          Desde Manatí hasta Rincón
        </p>
      </section>

    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function Service({ title, text }: { title: string; text: string }) {
  return (
    <div>
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
        alt="Trabajo realizado"
        width={1200}
        height={800}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
