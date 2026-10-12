import './App.css'
import acuarela from '../public/media/acuarela.png';

function App() {
  return (
    <>
      <section id="navbar">
        <p className='jimena'>Jimena González</p>
        <p className='and'>&</p>
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
      <section id="bottom">
        <div>
          <h2 className='date'>05.06.2027</h2>
          <p className='place'>Cuenca, España</p>
        </div>
      </section>
    </>
  )
}

export default App