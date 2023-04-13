import logoButton from '../../assets/thunder.svg'
import logoImg from '../../assets/logoName.svg'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import { useContextSelector } from 'use-context-selector'
import { NewTransactionModal } from '../NewTransactionModal'

import * as Dialog from '@radix-ui/react-dialog'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Header() {
  const isOpen = useContextSelector(TransactionsContext, (context) => {
    return context.isOpen
  })

  const setIsOpen = useContextSelector(TransactionsContext, (context) => {
    return context.setIsOpen
  })

  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <Dialog.Root open={isOpen} onOpenChange={() => setIsOpen(false)}>
          <Dialog.Trigger asChild>
            <NewTransactionButton onClick={() => setIsOpen(true)}>
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
