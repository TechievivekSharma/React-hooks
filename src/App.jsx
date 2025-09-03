import React from 'react'
import UseStateHook from './UseStateHook'
import Counter from './projects/Counter'
import UseEffectHook from './UseEffectHook'
import Debounce from './projects/Debounce'


const App = () => {
  return (
    <div>
      <Counter></Counter>
      <UseStateHook></UseStateHook>
      <UseEffectHook />
      <Debounce />
    </div>
  )
}

export default App
