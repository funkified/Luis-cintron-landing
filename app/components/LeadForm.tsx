"use client";

import client from "@/data/client.json";

export default function LeadForm() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-center">
          Solicita tu Evaluación Gratis
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Completa el formulario y te contactamos lo antes posible.
        </p>

        <form
          className="mt-10 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

            const text = `Hola, soy ${name}. Mi teléfono es ${phone}. ${message}`;
            const url = `https://wa.me/${client.whatsapp}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Nombre completo"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Teléfono"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <textarea
            name="message"
            placeholder="¿Qué producto te interesa? (Calentador / Cisterna)"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-semibold"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  );
}
