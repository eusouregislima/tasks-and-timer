import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import 'semantic-ui-css/semantic.min.css'
import { Popup } from 'semantic-ui-react'

import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
        <nav>
          <Popup
            content="Liste sua atividade, começe quando estiver preparado"
            header="Timer"
            trigger={
              <NavLink to="/" title="Timer">
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
