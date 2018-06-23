import React from 'react'
import logo from '../../img/logo.svg'

export default () => (
  <header className='w-full fixed bg-white'>
    <img 
      src={logo} 
      className='w-48 absolute pin-t pin-l m-4' />
    <a className='absolute pin-t pin-r m-4' href='#'>Nav</a>
  </header>
)
