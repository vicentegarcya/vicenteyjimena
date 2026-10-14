import './App.css'
import acuarela from '../public/media/acuarela.png';

function App() {
  return (
    <>
      <section id="navbar">
        
      </section>
      <section id='names'>
        <p className='jimena'>Jimena González</p>
        <p className='and'>+</p>
        <p className='vicente'>Vicente García</p>
      </section>
      <section id="center">
        <h1 className='date-title'>SAVE THE DATE</h1>
        <img
          src={acuarela}
          alt="Acuralea de nuestra boda"
          className="acuarela"
        />
      </section>
      <section id='bottom'>
        <div className='date'>
          <h2>05</h2>
          <h2>・</h2>
          <h2>06</h2>
          <h2>・</h2>
          <h2>27</h2>
        </div>
        <div className='place'>
          <p>Cuenca, España</p>
        </div>
      </section>
      <section id='explanation'>
        <p>Nos haría muy felices que pudieras acompañarnos en este día tan importante para nosotros.</p>
        <p>En breves podrás consultar la ubicación, cómo llegar, horarios y planificación del día, código de vestimenta y más detalles.</p>
        <p>Si tienes alguna duda o quieres consultarnos cualquier cosa, puedes llamarnos o enviarnos un mensaje sin problema.</p>
      </section>
      <div className='blur'></div>
    </>
  )
}

export default App