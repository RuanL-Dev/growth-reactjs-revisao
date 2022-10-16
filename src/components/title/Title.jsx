import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.primary};
`

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>
}
