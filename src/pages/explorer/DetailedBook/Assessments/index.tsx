import Image from 'next/image'
import {
  AddAssessment,
  AddAssessmentButtons,
  AddAssessmentHeader,
  AddAssessmentHeaderProfile,
  AddAssessmentTextarea,
  Assessment,
  Header,
  ListAssessments,
  User,
} from './styles'
import { Stars } from '@/src/pages/components/Stars'

import userImage from '../../../../assets/foto-perfil-2.jpg'
import { Check, X } from 'phosphor-react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { ModalLogin } from '../../ModaLogin'

export function Assessments() {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)

  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  function handleUserReview() {
    if (!isSignedIn) {
      setIsModalLoginOpen(true)
    }
  }

  return (
    <div>
      <Header>
        <span>Avaliações</span>
        <button onClick={handleUserReview}>Avaliar</button>
      </Header>

      <ListAssessments>
        {isSignedIn && (
          <AddAssessment>
            <AddAssessmentHeader>
              <AddAssessmentHeaderProfile>
                <Image src={userImage} alt="" />
                <strong>Cristofer Rosser</strong>
              </AddAssessmentHeaderProfile>

              <Stars />
            </AddAssessmentHeader>

            <AddAssessmentTextarea
              placeholder="Escreva sua avaliação"
              maxLength={450}
            />

            <AddAssessmentButtons>
              <button>
                <X size={24} />
              </button>

              <button>
                <Check size={24} />
              </button>
            </AddAssessmentButtons>
          </AddAssessment>
        )}

        <Assessment>
          <div>
            <User>
              <Image src={userImage} alt="" />

              <div>
                <strong>Brandon Botosh</strong>
                <span>Há 2 dias</span>
              </div>
            </User>

            <Stars />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            atque accusamus, aliquid ipsam reprehenderit quae sit praesentium
            similique, consequuntur dicta excepturi optio quo totam vero
            reiciendis libero dolorem. Nemo, rem.
          </p>
        </Assessment>

        <Assessment>
          <div>
            <User>
              <Image src={userImage} alt="" />

              <div>
                <strong>Brandon Botosh</strong>
                <span>Há 4 meses</span>
              </div>
            </User>

            <Stars />
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae</p>
        </Assessment>
      </ListAssessments>

      {isModalLoginOpen && (
        <ModalLogin isModalLoginOpen={setIsModalLoginOpen} />
      )}
    </div>
  )
}
