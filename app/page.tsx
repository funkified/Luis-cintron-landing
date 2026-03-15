export default function Page() {
  return (
    <main style={{fontFamily:"Arial", textAlign:"center", background:"#f5f5f5"}}>

      <section style={{background:"#0f172a", color:"white", padding:"60px 20px"}}>
        <h1 style={{fontSize:"36px"}}>
          Deja de pagarle a LUMA por agua caliente
        </h1>

        <p style={{fontSize:"20px"}}>
          Instala un calentador solar Universal y ahorra dinero todos los meses
        </p>

        <a
          href="https://wa.me/17878005102?text=Hola%20quiero%20información%20sobre%20el%20calentador%20solar"
          style={{
            display:"inline-block",
            background:"#25D366",
            color:"white",
            padding:"16px 28px",
            fontSize:"20px",
            fontWeight:"bold",
            borderRadius:"8px",
            textDecoration:"none",
            marginTop:"20px"
          }}
        >
          💬 Cotizar por WhatsApp
        </a>

        <br/>

        <a
          href="tel:+17878005102"
          style={{
            display:"inline-block",
            background:"#111",
            color:"white",
            padding:"16px 28px",
            fontSize:"20px",
            fontWeight:"bold",
            borderRadius:"8px",
            textDecoration:"none",
            marginTop:"15px"
          }}
        >
          📞 Llamar ahora
        </a>

        <p style={{marginTop:"10px", fontSize:"20px"}}>
          787-800-5102
        </p>
      </section>

      <section style={{padding:"40px"}}>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/Solar_water_heater_on_roof.jpg"
          style={{maxWidth:"500px", width:"90%", borderRadius:"10px"}}
        />

        <div style={{fontSize:"20px", marginTop:"20px", lineHeight:"1.8"}}>

          ✔ Agua caliente todo el día <br/>
          ✔ Ahorra dinero todos los meses <br/>
          ✔ Instalación profesional <br/>
          ✔ Equipos resistentes a huracanes

        </div>

      </section>

      <footer style={{padding:"30px", color:"#444"}}>
        Luis Cintrón – Servicio en Puerto Rico
      </footer>

    </main>
  )
}
