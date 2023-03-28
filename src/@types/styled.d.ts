import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
// guardando isso em uma variável

type ThemeType = typeof defaultTheme

// O que acontece aqui é que estou importando as definições que ja existem do styled-components para adicionar
// coisas novas sobrescrevendo.
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
