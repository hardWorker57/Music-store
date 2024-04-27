import React from 'react'
import { useParams } from 'react-router-dom'

const Catalog = () => {
  const { id } = useParams()

  console.log()
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl">Catalog</h2>
      <hr />
      <br />
      <h2 className='text-2xl'>{id}</h2>
    </div>
  )
}

export default Catalog