import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { Sidebar } from '../components/sidebar'
import {
  BookCard,
  BookGrid,
  BookRead,
  Categories,
  Container,
  Header,
  IconInput,
  Main,
  TitleAndAuthor,
} from './styles'

import { Stars } from '../components/Stars'

import bookImage from '../../assets/book-cover.png'
import Image from 'next/image'
import { DetailedBook } from './DetailedBook'
import { useState } from 'react'

export default function Explorer() {
  const [isOpenDetailedBook, setIsOpenDetailedBook] = useState(false)

  function handleClickOnBook() {
    setIsOpenDetailedBook(true)
  }

  return (
    <>
      <Container isOpenDetailedBook={isOpenDetailedBook}>
        <Sidebar />

        <Main>
          <Header>
            <div>
              <Binoculars size={32} />
              <h2>Explorar</h2>
            </div>

            <div>
              <input
                name="search"
                type="text"
                placeholder="Buscar livro ou autor"
              />

              <IconInput>
                <MagnifyingGlass size={20} />
              </IconInput>
            </div>
          </Header>

          <Categories>
            <button>Tudo</button>
            <button>Computação</button>
            <button>Educação</button>
            <button>Fantasia</button>
            <button>Ficção científica</button>
            <button>Horror</button>
            <button>HQs</button>
            <button>Suspense</button>
          </Categories>

          <BookGrid>
            <BookCard onClick={handleClickOnBook}>
              <BookRead>Lido</BookRead>

              <Image src={bookImage} alt="" />

              <TitleAndAuthor>
                <div>
                  <strong>A revolução dos bichos</strong>
                  <span>George Orwell</span>
                </div>

                <Stars />
              </TitleAndAuthor>
            </BookCard>

            <BookCard>
              <Image src={bookImage} alt="" />

              <TitleAndAuthor>
                <div>
                  <strong>A revolução dos bichos</strong>
                  <span>George Orwell</span>
                </div>

                <Stars />
              </TitleAndAuthor>
            </BookCard>

            <BookCard>
              <Image src={bookImage} alt="" />

              <TitleAndAuthor>
                <div>
                  <strong>A revolução dos bichos</strong>
                  <span>George Orwell</span>
                </div>

                <Stars />
              </TitleAndAuthor>
            </BookCard>

            <BookCard>
              <Image src={bookImage} alt="" />

              <TitleAndAuthor>
                <div>
                  <strong>A revolução dos bichos</strong>
                  <span>George Orwell</span>
                </div>

                <Stars />
              </TitleAndAuthor>
            </BookCard>
          </BookGrid>
        </Main>
      </Container>

      <DetailedBook
        isOpen={isOpenDetailedBook}
        setIsOpen={setIsOpenDetailedBook}
      />
    </>
  )
}
