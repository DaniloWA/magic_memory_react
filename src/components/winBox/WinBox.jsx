import React, { useEffect } from 'react'
import './WinBox.css'

const WinBox = () => {
  const [seconds, setSeconds] = React.useState(15);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [seconds]);

  return (
    <div className='winBox'>
        <h1>You Win!!!</h1>
        <p>Turnos : </p>
        <small>Time to Restart: {seconds}</small>
    </div>
  )
}

export default WinBox