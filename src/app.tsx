import { h } from 'preact'
import { useState } from 'preact/hooks'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>inc</button>
    </div>
  )
}

export default App
