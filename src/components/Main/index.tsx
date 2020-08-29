import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/ian-logo.png" alt="Imagem do logo Ian" />
    <S.Title>BoilerPlate</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Uma pessoa na frente de um computador digitando"
    />
  </S.Wrapper>
)

export default Main
