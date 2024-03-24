import { CaretLeft, User } from 'phosphor-react'
import {
  BackButton,
  Book,
  BookCard,
  BooksContainer,
  Container,
  TitleAndAuthor,
  TopTitle,
} from './styles'
import { SearchForm } from '../components/SearchForm'
import { useState } from 'react'

import Image from 'next/image'

import bookImage from '../../../assets/book-cover.png'
import { Stars } from '../../components/Stars'

export function MainProfile() {
  const [logged, setLogged] = useState(true)

  return (
    <Container>
      <div>
        {logged ? (
          <TopTitle>
            <User size={32} />
            <strong>Perfil</strong>
          </TopTitle>
        ) : (
          <BackButton>
            <CaretLeft size={20} />
            Voltar
          </BackButton>
        )}

        <SearchForm />
      </div>

      <BooksContainer>
        <Book>
          <span>Há 2 dias</span>
          <BookCard>
            <div>
              <Image src={bookImage} alt="" />

              <TitleAndAuthor>
                <div>
                  <strong>Entendendo Algoritmos</strong>
                  <span>Aditya Bhargava</span>
                </div>

                <Stars />
              </TitleAndAuthor>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              soluta voluptatum modi repellat eligendi nostrum animi ab quasi
              quas, quia quibusdam maiores? Aspernatur tempora quas amet
              similique ipsa fugit vel?
            </p>
          </BookCard>
        </Book>

        <Book>
          <span>Há 4 meses</span>
          <BookCard>
            <div>
              <Image src={bookImage} alt="" />

              <TitleAndAuthor>
                <div>
                  <strong>Entendendo Algoritmos</strong>
                  <span>Aditya Bhargava</span>
                </div>

                <Stars />
              </TitleAndAuthor>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              soluta voluptatum modi repellat eligendi nostrum animi ab quasi
              quas, quia quibusdam maiores? Aspernatur tempora quas amet
              similique ipsa fugit vel?
            </p>
          </BookCard>
        </Book>
      </BooksContainer>
    </Container>
  )
}
