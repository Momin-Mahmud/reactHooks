import './App.css'
import Example from './modules/useContext/Example'
import UseMemoExample from './modules/useMemo'
import RefExample from './modules/useRef/Example'

function App() {
  return (
    <>
        <div>
          <div>
            <Example/>
          </div>
          <div>
            <RefExample/>
          </div>
          <div>
            <UseMemoExample/>
          </div>
        </div>
    </>
  )
}

export default App
