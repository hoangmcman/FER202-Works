import React from 'react'
import {useState, useEffect, useRef} from 'react'
import "./AnswerTimer.css"

const AnswerTimer = (props) => {
    const [counter, setCounter] = useState(0);
    const [processLoaded, setProcessLoaded] = useState(0);
    const intervalRef = useRef(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((current) => current + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        setProcessLoaded((counter / props.duration) * 100);

        if(counter === props.duration){
            clearInterval(intervalRef.current);
            setTimeout(props.onTimeUp, 300);
        }
    }, [current]);

  return (
    <div>
      <div className='answer-timer-container'>
        <div style={{width: `${processLoaded}%`, 
                    backgroundColor: processLoaded < 40 ? `lightgreen` : 
                    processLoaded < 80 ? `orange` : `red`,
                }} className='progress'>
        </div>
      </div>
    </div>
  )
}

export default AnswerTimer
