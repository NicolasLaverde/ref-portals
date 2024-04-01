import { useState, useRef } from 'react'
import ResultModal from './ResultModal'

const TimeChallenger  = ({ title, targetTime}) => {
    const timer = useRef()

    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)
    const [timerStarted, setTimerStarted] = useState(false)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000

    if(timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    const handleReset = () => {
        setTimeRemaining(targetTime*1000)
    }

    const handleStart = () => {
        const decrease = 10
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - decrease)
        }, decrease)

        setTimerStarted(true)
    }

    const handleStop = () => {
        dialog.current.open()
        clearInterval(timer.current)
    }

    return(
    <>
    <ResultModal
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
        ref={dialog}
    />
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime>1 && 's'}
        </p>
        <p>
            <button style={{background: 'yellow'}} onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop': 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'} 
        </p>

    </section>
    </>
)}

export default TimeChallenger