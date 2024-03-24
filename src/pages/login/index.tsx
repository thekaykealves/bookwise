import Image from 'next/image'
import {
  AccessButton,
  LoginActions,
  LoginContainer,
  LoginImageContainer,
} from './styles'

import loginImage from '../../assets/login.png'
import googleIconImage from '../../assets/google.png'
import gitHubIconImage from '../../assets/github.png'
import rocketIconImage from '../../assets/rocket.png'
import bookIconImage from '../../assets/book.png'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  async function handleNextPage() {
    await router.push('/home')
  }

  return (
    <LoginContainer>
      <LoginImageContainer>
        <div>
          <Image src={bookIconImage} alt="" />

          <h1>BookWise</h1>
        </div>

        <Image src={loginImage} alt="" />
      </LoginImageContainer>

      <LoginActions>
        <strong>Boas vindas!</strong>
        <p>Faça seu login ou acesse como visitante.</p>

        <div>
          <AccessButton onClick={() => signIn('google')}>
            <Image src={googleIconImage} width={32} height={32} alt="" />
            Entrar com o Google
          </AccessButton>
          <AccessButton onClick={() => signIn('github')}>
            <Image src={gitHubIconImage} width={32} height={32} alt="" />
            Entrar com o GitHub
          </AccessButton>
          <AccessButton onClick={handleNextPage}>
            <Image src={rocketIconImage} width={32} height={32} alt="" />
            Acessar como visitante.
          </AccessButton>
        </div>
      </LoginActions>
    </LoginContainer>
  )
}
