import { HeaderLayoutProps } from '../../utils/types'
import Header from '../Header'

function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HeaderLayout
