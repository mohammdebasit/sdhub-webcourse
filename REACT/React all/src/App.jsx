import React from 'react'
import usecounter from './globel vars/countvar'

const App = () => {
  const count = usecounter((state) => state.counter)
  const increase = usecounter((state) => state.increasecount)
  const resset = usecounter((state) => state.resetcount)
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={resset}>Reset</button>

    </>
  )
}

export default App