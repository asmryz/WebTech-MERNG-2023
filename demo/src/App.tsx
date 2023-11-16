import React, { useState } from 'react'

import './App.css'
import Body from './component/Body'
import Counter from './component/Counter'






function App() {

  return (

    <>
      <Body num={5} msg='Hello World !' arr={[1, 2]} />
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
