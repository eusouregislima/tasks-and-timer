import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './context/CyclesContext'
import { TasksContextProvider } from './context/TaskContext'
// import { HomeContext } from './HomeContext'

export function App() {
  // return <HomeContext />
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <TasksContextProvider>
            <Router />
          </TasksContextProvider>
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

// Aqui estou criando um tema geral para a minha aplicação
// Isso quer dizer que se eu tiver dois ou mais arquivos de temas, posso utilizar um estado para
// quando o usuário apertar em um botão esse tema ser modificado, e isso refletirá na aplicação inteira.

// o home context é a aula sobre contexto no react
