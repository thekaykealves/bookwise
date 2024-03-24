import { Container } from './styles'
import { Sidebar } from '../components/sidebar'
import { MainProfile } from './MainProfile'
import { InfosProfile } from './InfosProfile'

export default function MyPerfil() {
  return (
    <Container>
      <Sidebar />
      <MainProfile />
      <InfosProfile />
    </Container>
  )
}
