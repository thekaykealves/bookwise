import { CaretRight } from 'phosphor-react'
import { Body, Card, Container, Header, InfosBook } from './styles'

import image from '../../../../assets/book-cover.png'
import Image from 'next/image'
import { Stars } from '@/src/pages/components/Stars'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { prisma } from '@/src/lib/prisma'

interface popularBooksProps {
  id: string
  book_id: string
  created_at: string
  user_id: string
  description: string
  rate: number
}

interface booksProps {
  books: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
    total_pages: number
    created_at: string
    lastRead: boolean
  }[]

  ratings: {
    id: string
    rate: number
    description: string
    created_at: string
    book_id: string
    user_id: string
  }[]
}

export function PopularBooks(books: booksProps) {
  const [popularBooks, setPopularBooks] = useState<popularBooksProps[]>([])

  const router = useRouter()

  const allBooks = books.books.map((book) => {
    return book.id
  })

  const allRatings = books.ratings.map((rating) => {
    return rating.book_id
  })

  for (let i = 0; i < allBooks.length; i++) {
    const book = allBooks[i]
    const rating = allRatings[i]

    const commonIds = allBooks.filter((book) => {
      return book === rating
    })

    console.log(commonIds)
    // console.log(`Os valores ${book} e ${rating} são iguais.`)
  }

  // function toCheckArrays(booksId: any, ratingsBookId: any) {
  //   const books = booksId.filter((value) => {
  //     return value.id === ratingsBookId.id
  //   })

  //   setPopularBooks(books)
  // }

  // toCheckArrays(allBooks, allRatings)

  // console.log(popularBooks)

  return (
    <Container>
      <Header>
        <span>Livros populares</span>
        <button onClick={() => router.push('/explorer')}>
          Ver todos
          <CaretRight size={16} />
        </button>
      </Header>

      <Body>
        <Card>
          <Image src={image} width={64} height={94} alt="" />
          <div>
            <InfosBook>
              <strong>A revolução dos bichos</strong>
              <span>George Orwell</span>
            </InfosBook>

            <Stars />
          </div>
        </Card>
      </Body>
    </Container>
  )
}
