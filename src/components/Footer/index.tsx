import { FooterContainer } from './styles'

import { GithubLogo, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <a
          href="https://github.com/eusouregislima"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size="25px" color="purple" />
        </a>
        <a
          href="https://www.linkedin.com/in/regis-lima/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size="25px" color="purple" />
        </a>
      </div>
      <span>
        <p>Desenvolvido por: Régis Lima Developer</p>
        <p>© 2023 R/L Tech Solutions</p>
      </span>
    </FooterContainer>
  )
}
