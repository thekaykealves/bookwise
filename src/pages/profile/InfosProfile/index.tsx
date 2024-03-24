import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'
import {
  ColoredRectangle,
  Container,
  AboutReading,
  PersonalInformation,
  Infos,
} from './styles'
import Image from 'next/image'

import { useSession } from 'next-auth/react'

export function InfosProfile() {
  const session = useSession()

  const userImage = session.data?.user?.image ?? ''
  const username = session.data?.user?.name ?? ''

  return (
    <Container>
      <PersonalInformation>
        <div>
          <Image src={userImage} width={72} height={72} alt="" />
        </div>
        <div>
          <strong>{username}</strong>
          <span>Membro desde 2019</span>
        </div>
      </PersonalInformation>

      <ColoredRectangle />

      <Infos>
        <AboutReading>
          <BookOpen size={32} />
          <div>
            <strong>3853</strong>
            <p>Páginas lidas</p>
          </div>
        </AboutReading>

        <AboutReading>
          <Books size={32} />
          <div>
            <strong>10</strong>
            <p>Livros avaliados</p>
          </div>
        </AboutReading>

        <AboutReading>
          <UserList size={32} />
          <div>
            <strong>8</strong>
            <p>Autores lidos</p>
          </div>
        </AboutReading>

        <AboutReading>
          <BookmarkSimple size={32} />
          <div>
            <strong>Computação</strong>
            <p>Categoria mais lida</p>
          </div>
        </AboutReading>
      </Infos>
    </Container>
  )
}
