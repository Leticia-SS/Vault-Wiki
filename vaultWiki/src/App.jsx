//import Descent from './Cast/Descent.jsx'
import Archetypes from './Cast/Archetypes.jsx'
import Menu from './Menu.jsx'
import './App.css'

const App = () => {
    return(
        <div className='container'>
        <header className='header'>
        <Menu/>
        </header>
        <main className='main'>
            <Archetypes/>
        </main>
        </div>
    )
}

export default App