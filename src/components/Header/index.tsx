import logoButton from '../../assets/thunder.svg'
import logoImg from '../../assets/logoName.svg'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import { NewTransactionModal } from '../NewTransactionModal'

import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              {' '}
              <img src={logoButton} alt="" />
              New Transaction
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
