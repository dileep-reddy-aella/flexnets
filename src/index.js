import React from 'react'
// import styles from './styles.module.css'
import './tailwind.css'
import { Box } from './components/Box'

export { Box };

export const ExampleComponent = ({ text }) => {
  return <div className='text-blue-600'>Example Component: {text}</div>
}
