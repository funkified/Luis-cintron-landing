import Image from "next/image";
import client from "@/data/client.json";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src="/solar1.jpg"
          alt="Sistema Solar Universal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Soluciones de energía y agua para tu hogar
          </h1>

          <p className="mt-6 text-xl text-white/90">
            Instalaciones profesionales en Ponce y pueblos cercanos
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${client.whatsapp}`}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Evaluación personalizada
            </a>

            <a
              href={`tel:${client.phone}`}
              className="bg-white/20 backdrop-blur hover:bg-white/30 px-8 py-4 rounded-full transition"
            >
              Contactar asesor
            </a>
          </div>
        </div>
      </section>


      {/* FILOSOFÍA */}
      <section className="py-28 bg-white text-center">
        <h2 className="text-3xl font-semibold">
          Ingeniería, eficiencia y tranquilidad.
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          En Universal Solar ofrecemos sistemas diseñados para durar,
          reducir el consumo eléctrico y asegurar estabilidad en el
          suministro de agua. Cada instalación es evaluada de manera
          personalizada para garantizar el mejor resultado.
        </p>
      </section>


      {/* SOLUCIONES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

          <Solution
            title="Calentadores Solares"
            text="Agua caliente todo el año con eficiencia energética y ahorro mensual."
          />

          <Solution
            title="Cisternas Residenciales"
            text="Sistemas de almacenamiento en Stainless Steel y Polietileno."
          />

          <Solution
            title="Sistemas Fotovoltaicos"
            text="Instalación profesional de paneles solares para el hogar."
          />

        </div>
      </section>


      {/* CISERNAS FEATURE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

          <Image
            src="/hero-cisternas-desktop.jpg"
            alt="Cisternas Universal"
            width={800}
            height={600}
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-semibold">
              Protección ante cortes de agua
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Nuestras cisternas residenciales ofrecen seguridad,
              durabilidad y tranquilidad para tu hogar.
            </p>

            <a
              href={`https://wa.me/${client.whatsapp}`}
              className="mt-10 inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>


      {/* INCENTIVO */}
      <section className="py-24 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-medium">
            Incentivo disponible hasta $550
          </h3>

          <p className="mt-4 text-gray-600">
            Programa vigente sujeto a elegibilidad del cliente.
          </p>
        </div>
      </section>


      {/* CTA FINAL */}
      <section className="py-24 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-semibold">
          Coordina tu evaluación personalizada
        </h2>

        <p className="mt-6 text-lg text-white/90">
          Atención directa en Ponce y pueblos cercanos
        </p>

        <a
          href={`https://wa.me/${client.whatsapp}`}
          className="mt-10 inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold transition hover:bg-yellow-300"
        >
          WhatsApp directo
        </a>
      </section>

    </main>
  );
}


function Solution({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}