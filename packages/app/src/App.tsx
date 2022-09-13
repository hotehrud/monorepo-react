import * as React from 'react'
import { css } from '@emotion/react'
import { Button } from '@root/components'
import styled from '@emotion/styled'
import logo from './logo.svg'
import './App.css'

const CodeTag = styled.code``

const Box = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[80]};
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  & ${CodeTag} {
    color: ${({ theme }) => theme.colors.white};
  }
`

const App = ({ ...restProps }) => {
  return (
    <div className="App" {...restProps}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box>
          <p>
            Edit <CodeTag>src/App.tsx</CodeTag> and save to reload.
          </p>
        </Box>
        <Button />
        <a
          css={css`
            color: #61dafb;
            margin-bottom: 10px;
          `}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
