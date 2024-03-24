import Image from 'next/image'
import {
  Actions,
  Avatar,
  BackgroundImage,
  ButtonAction,
  ButtonLogin,
  ButtonLogout,
  Container,
  Header,
} from './styles'

import bookIconImage from '../../../assets/book.png'
import backgroundImage from './assets/background.png'

import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export function Sidebar() {
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  const router = useRouter()

  async function handlePageSelected(route: string) {
    await router.push(`/${route}`)
  }

  const username = session.data?.user?.name ?? ''
  const userImage = session.data?.user?.image ?? ''

  return (
    <Container>
      <div>
        <Header>
          <Image src={bookIconImage} width={24} height={24} alt="" />
          <strong>BookWise</strong>
        </Header>

        <Actions>
          <ButtonAction
            onClick={() => handlePageSelected('/home')}
            className={`${router.pathname === '/home' ? 'active' : ''}`}
          >
            <ChartLineUp size={24} />
            Início
          </ButtonAction>
          <ButtonAction
            onClick={() => handlePageSelected('/explorer')}
            className={`${router.pathname === '/explorer' ? 'active' : ''}`}
          >
            <Binoculars size={24} />
            Explorar
          </ButtonAction>
          {isSignedIn && (
            <ButtonAction
              onClick={() => handlePageSelected('/profile')}
              className={`${router.pathname === '/profile' ? 'active' : ''}`}
            >
              <User size={24} />
              Perfil
            </ButtonAction>
          )}
        </Actions>
      </div>

      {isSignedIn ? (
        <ButtonLogout>
          <Avatar>
            <Image src={userImage} width={32} height={32} alt="" />
          </Avatar>
          <span>{username}</span>
          <SignOut size={20} />
        </ButtonLogout>
      ) : (
        <ButtonLogin onClick={() => router.push('/')}>
          <span>Fazer login</span>
          <SignIn size={20} />
        </ButtonLogin>
      )}

      <BackgroundImage>
        <Image src={backgroundImage} alt="" />
      </BackgroundImage>
    </Container>
  )
}
