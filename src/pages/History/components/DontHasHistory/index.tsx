import { DontHasHistory } from './styles'
import NoHasPub from '../../../../assets/noHasPub.svg'

export function ComponentDontHasHistory() {
  return (
    <DontHasHistory>
      <img
        src={NoHasPub}
        alt="Imagem de um rapas sentado sobre a representação da janela de um computador vazia com uma moça sentada ao chão"
      />
      <h1>Sem Histórico por aqui</h1>
    </DontHasHistory>
  )
}
