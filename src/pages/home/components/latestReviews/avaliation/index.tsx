import Image from 'next/image'
import {
  Avatar,
  BodyCard,
  ContainerCard,
  HeaderBodyCard,
  InfosBook,
  Profile,
  TitleAndAuthor,
} from './styles'

import { Stars } from '@/src/pages/components/Stars'
import { useSession } from 'next-auth/react'

interface AvaliationProps {
  book: {
    author: string
    cover_url: string
    created_at: string
    id: string
    name: string
    summary: string
    total_pages: number
    lastRead?: boolean
  }
}

export function Avaliation({ book }: AvaliationProps) {
  const session = useSession()

  const userImage = session.data?.user?.image ?? ''
  const username = session.data?.user?.name ?? ''

  return (
    <ContainerCard lastRead={book.lastRead}>
      <Profile lastRead={book.lastRead}>
        <div>
          <Avatar>
            <Image src={userImage} width={40} height={40} alt="" />
          </Avatar>
          <div>
            <p>{username}</p>
            <span>Hoje</span>
          </div>
        </div>

        <Stars />
      </Profile>

      <BodyCard>
        <Image src={book.cover_url} width={110} height={150} alt="" />

        <InfosBook>
          {book.lastRead && (
            <HeaderBodyCard>
              <span>Há 2 dias</span>
              <Stars />
            </HeaderBodyCard>
          )}

          <TitleAndAuthor>
            <strong>{book.name}</strong>
            <span>{book.author}</span>
          </TitleAndAuthor>

          <p>{book.summary}</p>
        </InfosBook>
      </BodyCard>
    </ContainerCard>
  )
}
