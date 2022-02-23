import React from 'react'
import './tailwind.css'
import { Box } from './components/Box'
import { Text } from './components/Text';


const ExampleComponent = ({ text }) => {
  return <div className='text-blue-600'>Example Component: {text}</div>
}

export { Box, Text, ExampleComponent };

