import * as S from './styles'

const Main = ({
  title = 'BoilerPlate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/ian-logo.png" alt="Imagem do logo Ian" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Uma pessoa na frente de um computador digitando"
    />
  </S.Wrapper>
)

export default Main
