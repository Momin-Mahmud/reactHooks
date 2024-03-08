import './App.css'
import { UseCallbackExample } from './modules/useCallback'
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
          <div>
            <UseCallbackExample/>
          </div>
        </div>
    </>
  )
}

export default App
