import { ButtonClose, ButtonLogin, Container } from './styles'

import googleIconImage from '../../../assets/google.png'
import githubIconImage from '../../../assets/github.png'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { signIn } from 'next-auth/react'

interface ModalLoginProps {
  isModalLoginOpen: (open: boolean) => void
}

export function ModalLogin({ isModalLoginOpen }: ModalLoginProps) {
  return (
    <Container>
      <p>Faça login para deixar sua avaliação</p>

      <div>
        <ButtonLogin onClick={() => signIn('google')}>
          <Image src={googleIconImage} alt="" width={32} height={32} />
          Entrar com Google
        </ButtonLogin>
        <ButtonLogin onClick={() => signIn('github')}>
          <Image src={githubIconImage} alt="" width={32} height={32} />
          Entrar com Github
        </ButtonLogin>
      </div>

      <ButtonClose onClick={() => isModalLoginOpen(false)}>
        <X size={24} />
      </ButtonClose>
    </Container>
  )
}
