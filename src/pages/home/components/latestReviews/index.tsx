import { CaretRight, ChartLineUp } from 'phosphor-react'
import { BookListing, Container, LastRead, StartTitle } from './styles'
import { Avaliation } from './avaliation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { api } from '@/src/lib/axios'

interface ListBooksProps {
  author: string
  cover_url: string
  created_at: string
  id: string
  name: string
  summary: string
  total_pages: number
  lastRead: boolean
}

export function LatestReviews() {
  const [listBooks, setListBooks] = useState<ListBooksProps[]>([])

  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  // console.log(session)

  async function FetchBooks() {
    const books = await api.get('/books')

    setListBooks(books.data.books)
  }

  useEffect(() => {
    FetchBooks()
  }, [])

  // const lastBookRead = listBooks.filter((book) => book.lastRead === true)

  // console.log(lastBookRead)

  return (
    <Container>
      <StartTitle>
        <ChartLineUp size={32} />
        Início
      </StartTitle>

      {isSignedIn && (
        <>
          <LastRead>
            <span>Sua última leitura</span>

            <button>
              Ver todas
              <CaretRight size={16} />
            </button>
          </LastRead>

          {/* {lastBookRead.map((book, i) => {
            return <Avaliation key={i} book={book} />
          })} */}
        </>
      )}

      <BookListing>
        <span>Avaliações mais recentes</span>
        {listBooks.map((book, i) => {
          return <Avaliation key={i} book={book} />
        })}
      </BookListing>
    </Container>
  )
}
