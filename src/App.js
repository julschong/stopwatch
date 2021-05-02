import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Timer from './components/Timer'

const App = () => {
    const [timerState, setTimerState] = useState('Stopped')
    const [timer, setTimer] = useState(0)
    const [timeoutId, settimeoutId] = useState(0)

    const startTimer = (currentTime, elapseDuration = 0) => {
        const intervalId = setInterval(() => {
            setTimer(Date.now() - currentTime + elapseDuration)
        }, 1)
        settimeoutId(intervalId)
    }

    const stopTimer = () => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        setTimer(0)
        setTimerState('Stopped')
    }

    const toggleTimer = () => {
        switch (timerState) {
            case 'Started':
                setTimerState('Paused')
                clearTimeout(timeoutId)
                settimeoutId(0)
                break
            case 'Stopped':
            case 'Paused':
                setTimerState('Started')
                startTimer(Date.now(), timer)

                break
            default:
        }
    }

    return (
        <div className="App">
            <Header />
            <Timer timerState={timerState} currentTime={timer} />
            <button onClick={toggleTimer}>
                {timerState === 'Started' ? 'Pause' : 'Start'}
            </button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default App
