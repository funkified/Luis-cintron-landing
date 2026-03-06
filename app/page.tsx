import Image from "next/image";
import client from "@/data/client.json";
import LeadForm from "./components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Universal Solar – Luis Cintrón
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Representante autorizado en Ponce
            </p>

            <p className="mt-6 text-lg text-gray-700">
              Instalación profesional de calentadores solares, cisternas
              y sistemas solares para tu hogar.
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


      {/* SERVICIOS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <Service
            title="Calentadores Solares"
            text="Agua caliente todo el año reduciendo el consumo eléctrico."
          />

          <Service
            title="Cisternas Residenciales"
            text="Almacenamiento seguro de agua para proteger tu hogar."
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


      {/* PRODUCTOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            Nuestros Productos
          </h2>

          <p className="mt-4 text-gray-600">
            Equipos confiables para tu hogar y ahorro energético.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <Product
              title="Calentadores Solares"
              text="Reduce tu factura eléctrica con agua caliente natural."
            />

            <Product
              title="Cisternas"
              text="Almacenamiento de agua para garantizar suministro continuo."
            />

            <Product
              title="Paneles Solares"
              text="Opciones de energía solar para reducir costos eléctricos."
            />

          </div>

        </div>
      </section>


      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-20 text-center px-6">

        <h2 className="text-3xl font-bold">
          Beneficios de la Energía Solar
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <Benefit
            title="Ahorro en electricidad"
            text="Reduce significativamente tu factura eléctrica."
          />

          <Benefit
            title="Independencia energética"
            text="Menos dependencia del sistema eléctrico tradicional."
          />

          <Benefit
            title="Equipos duraderos"
            text="Sistemas diseñados para durar años."
          />

        </div>

      </section>


      {/* GALERIA */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <GalleryImage src="/solar1.jpg" />
          <GalleryImage src="/solar2.jpg" />
          <GalleryImage src="/solar3.jpg" />

        </div>

      </section>


      {/* FORMULARIO */}
      <LeadForm />


      {/* CTA FINAL */}
      <section className="bg-yellow-500 py-16 text-center">

        <h2 className="text-3xl font-bold">
          Solicita tu evaluación gratuita hoy
        </h2>

        <p className="mt-4">
          Nuestro equipo te orienta sin compromiso.
        </p>

        <a
          href={`https://wa.me/${client.whatsapp}`}
          className="inline-block mt-6 bg-black text-white px-8 py-4 rounded-lg font-semibold"
        >
          Hablar por WhatsApp
        </a>

      </section>


      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-8">

        <p className="font-semibold">
          Universal Solar – Luis Cintrón
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Instalación de calentadores solares, cisternas y sistemas solares en Puerto Rico.
        </p>

      </footer>

    </main>
  );
}



/* COMPONENTS */


function Service({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}


function Product({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}


function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{text}</p>
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