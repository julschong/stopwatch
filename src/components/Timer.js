import { useState } from 'react';
import './Timer.css';

const Timer = () => {
    // timer state
    const [timerState, setTimerState] = useState(TIMER_STATE.PAUSED);

    // stores current timer in ms
    const [timer, setTimer] = useState(0);

    // store timeoutId to cancel later on
    const [timeoutId, settimeoutId] = useState(0);

    const startTimer = (currentTime, elapseDuration = 0) => {
        const intervalId = setInterval(() => {
            setTimer(Date.now() - currentTime + elapseDuration);
        }, 1);
        settimeoutId(intervalId);
    };

    const stopTimer = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimer(0);
        setTimerState(TIMER_STATE.STOPPED);
    };

    const toggleTimer = (event) => {
        switch (timerState) {
            case TIMER_STATE.STARTED:
                setTimerState(TIMER_STATE.PAUSED);
                clearTimeout(timeoutId);
                settimeoutId(0);
                break;
            case TIMER_STATE.STOPPED:
            case TIMER_STATE.PAUSED:
                setTimerState(TIMER_STATE.STARTED);
                startTimer(Date.now(), timer);

                break;
            default:
        }
    };

    const DigitDisplay = (number, digits) => {
        switch (digits) {
            case 2:
                if (number < 10) {
                    return '0' + number;
                } else {
                    return number;
                }
            case 3:
                if (number < 10) {
                    return '00' + number;
                } else if (number < 100) {
                    return '0' + number;
                } else {
                    return number;
                }
            default:
                return '';
        }
    };

    const hour = Math.floor(timer / 3600000);
    const minute = Math.floor((timer / 60000) % 60);
    const second = Math.floor((timer / 1000) % 60);
    const centisecond = Math.floor((timer % 1000) / 100);
    const millisecond = Math.floor((timer % 1000) % 100);

    return (
        <section className="timer-container">
            <div className="timer">
                <p className="digits">{DigitDisplay(hour, 2)}</p>
                <p className="colon">:</p>
                <p className="digits">{DigitDisplay(minute, 2)}</p>
                <p className="colon">:</p>
                <p className="digits">{DigitDisplay(second, 2)}</p>
                <p className="colon">:</p>
                <p className="digits">
                    {centisecond}
                    <span className="2-ms">{DigitDisplay(millisecond, 2)}</span>
                </p>
            </div>
            <div className={'control'}>
                <button className={'start-button'} onClick={toggleTimer}>
                    {timerState === 'Started' ? 'Pause' : 'Start'}
                </button>
                <button className={'reset-button'} onClick={stopTimer}>
                    Reset
                </button>
            </div>
        </section>
    );
};

const TIMER_STATE = Object.freeze({
    STARTED: 'STARTED',
    STOPPED: 'STOPPED',
    PAUSED: 'PAUSED'
});

export default Timer;
