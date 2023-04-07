import { HeaderContainer } from './styles'
import { Timer, Scroll, CalendarCheck } from 'phosphor-react'
import 'semantic-ui-css/semantic.min.css'
import { Popup } from 'semantic-ui-react'

import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>

        <nav>
          <Popup
            content="Liste suas tarefas a fazer"
            header="Tarefas"
            trigger={
              <NavLink to="/" title="Timer">
                <CalendarCheck size={24} />
              </NavLink>
            }
          />
          <Popup
            content="Marque o tempo para executar a sua atividade"
            header="Pomodoro"
            trigger={
              <NavLink to="/to-do-list" title="Timer">
                <Timer size={24} />
              </NavLink>
            }
          />
          <Popup
            content="Veja o histórico das suas atividades"
            header="Histórico"
            trigger={
              <NavLink to="/history" title="Histórico">
                <Scroll size={24} />
              </NavLink>
            }
          />
        </nav>
      </div>
    </HeaderContainer>
  )
}
