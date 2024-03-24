import {
  AboutBook,
  BookCard,
  ButtonClose,
  Container,
  InfosBook,
  InfosBookBox,
  TitleAndAuthor,
} from './styles'

import bookImage from '../../../assets/book-cover.png'
import Image from 'next/image'
import { Stars } from '../../components/Stars'
import { BookBookmark, BookOpen, X } from 'phosphor-react'
import { Assessments } from './Assessments'

interface DetailedBookProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function DetailedBook({ isOpen, setIsOpen }: DetailedBookProps) {
  return (
    <>
      <Container isOpenDetailedBook={isOpen}>
        <ButtonClose onClick={() => setIsOpen(false)}>
          <X size={24} />
        </ButtonClose>

        <BookCard>
          <AboutBook>
            <Image src={bookImage} alt="" />

            <TitleAndAuthor>
              <div>
                <strong>
                  14 Hábitos de Desenvolvedores Altamente Produtivos
                </strong>
                <p>Zeno Rocha</p>
              </div>

              <div>
                <Stars />
                <span>3 avaliações</span>
              </div>
            </TitleAndAuthor>
          </AboutBook>

          <InfosBookBox>
            <InfosBook>
              <BookBookmark size={24} />
              <div>
                <span>Categoria</span>
                <p>Computação, educação</p>
              </div>
            </InfosBook>

            <InfosBook>
              <BookOpen size={24} />
              <div>
                <span>Páginas</span>
                <p>160</p>
              </div>
            </InfosBook>
          </InfosBookBox>
        </BookCard>

        <Assessments />
      </Container>
    </>
  )
}
