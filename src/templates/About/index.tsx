import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
        sed, consequatur rem minus maxime saepe nulla voluptates mollitia?
        Tempore dolorem ipsum quibusdam vel blanditiis modi, nam ullam sed
        numquam?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
