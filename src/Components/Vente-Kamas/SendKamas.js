import './sendkamas.css';
import cra from './cra.jpg';
import iop from './Eratz.png'


export default function SendKamas() {
  return (
    <div className='send-kamas'>
      <img className="dofus2" src={cra} alt="Dofus 2" />
      <button className='button-kamas'>Dofus 2.0</button>
      <img  className="dofus-retro"src={iop} alt="Dofus Rétro" />
      <button className='button-retro'>Dofus 1.29</button>

      
     </div>
  )
}
