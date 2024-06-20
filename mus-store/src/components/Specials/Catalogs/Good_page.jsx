import React from 'react'
import { GoTrash } from 'react-icons/go'
import { useParams } from 'react-router-dom'

const Good_page = ({instruments}) => {

  const { id } = useParams()

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl">Instrument</h2>
      <hr />
      <br />
      {/* <p className="text-lg">LikedList</p><br /> */}
      {instruments.filter(el => el.id == id).map((item, i) => (
        <div key={i} className='flex justify-between'>
          <div className="">
            <img src={item.img} alt="" />
            <p className='text-2xl'>{item.title}</p>
          </div>
          <div className="flex gap-y-10 flex-col items-center">
            {item.description}
            <p className={item.stock ? 'text-green-400 text-lg' : 'text-red-400 text-lg'}>{item.stock ? 'On stock' : 'Out of stock'}</p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Good_page