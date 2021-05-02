import './App.css'
import Header from './components/Header'
import Timer from './components/Timer'

const App = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="main">
                <Timer />
            </main>
        </div>
    )
}

export default App
