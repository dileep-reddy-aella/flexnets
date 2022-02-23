import React from 'react'

import { ExampleComponent, Box } from 'flexnets'
import 'flexnets/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Box color='blue-500' border={'solid'}>
        Hello
      </Box>
    </>
  )
}

export default App
