import React from 'react'

export default function Footer({ name }) {
  return (
    <>
      <footer className="flex flex-col items-center justify-center">
        <h1 className='font-bold text-2xl'>Thank you {name}</h1>
        <p>Please visit again</p>
      </footer>
    </>
  )
}
