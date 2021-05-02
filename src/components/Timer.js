const Timer = ({ currentTime }) => {
    const hour = Math.floor(currentTime / 3600000)
    const minute = Math.floor((currentTime / 60000) % 60)
    const second = Math.floor((currentTime / 1000) % 60)
    const millisecond = Math.floor(currentTime % 1000)

    return (
        <div className="timer">
            <p>{hour} hr </p>
            <p>{minute} min</p>
            <p>{second} sec</p>
            <p>{millisecond} ms</p>
        </div>
    )
}

export default Timer
