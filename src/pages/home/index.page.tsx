import { LatestReviews } from './components/latestReviews'
import { PopularBooks } from './components/popularBooks'
import { Sidebar } from '../components/sidebar'
import { HomeContainer } from './styles'
import { api } from '@/src/lib/axios'
import { GetServerSideProps } from 'next'

interface HomeProps {
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

export default function Home({ books, ratings }: HomeProps) {
  return (
    <HomeContainer>
      <Sidebar />
      <LatestReviews />
      <PopularBooks books={books} ratings={ratings} />
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get(`/books/popularbook`)

  const books = response.data.books
  const ratings = response.data.ratings

  return {
    props: {
      books,
      ratings,
    },
  }
}
