import styled from '@emotion/styled'

export const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[80]};
`
