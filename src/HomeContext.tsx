// Notas da aula de contexto

import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCicleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <h1>
      NewCicleForm: {activeCycle}{' '}
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        Alterar ciclo
      </button>
    </h1>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown: {activeCycle}</h1>
}

export function HomeContext() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        setActiveCycle,
      }}
    >
      <div>
        <NewCicleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
