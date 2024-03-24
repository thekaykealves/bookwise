import { MagnifyingGlass } from 'phosphor-react'
import { Container } from './styles'

export function SearchForm() {
  return (
    <Container>
      <input type="text" name="search" placeholder="Buscar livro avaliado" />
      <MagnifyingGlass size={20} />
    </Container>
  )
}
