import React from 'react'
import FactorialCalculator from './FactorialCalculator'
export default function App() {
  return (
    <div>
      {true  && <FactorialCalculator />}
      {true  && <FactorialCalculator />}
    </div>
  )
}
