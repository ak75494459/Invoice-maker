import React from 'react'

export default function ClientDetails({name,number}) {
  return (
    <>
      <section className="mt-5">
          <h2 className="text-xl uppercase">{name}</h2>
          <p>{number}</p>
        </section>
    </>
  )
}
