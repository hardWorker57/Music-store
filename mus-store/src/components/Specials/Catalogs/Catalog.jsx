import React from 'react'
import { useParams } from 'react-router-dom'

const Catalog = ({instruments, deleteInstrument}) => {
  const { id } = useParams()

  // useEffect(() => {

  // })

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl">Catalog</h2>
      <hr />
      <br />
      <h2 className='text-2xl'>{id}</h2> <br />
      <div className="flex gap-x-8 gap-y-3 mx-auto max-w-max flex-wrap justify-center">
        {instruments.filter(instr => instr.type == id).map((item, i) => (
          <div key={i}>
            <div className="flex flex-col items-start gap-1 max-w-64 w-64 hover:scale-95 adelay">
                <div className="rounded-2xl bg-red-200 overflow-hidden w-full h-72">
                  <img src={item ? item.img : ''} alt="" className='max-w-full w-full h-full'/>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className='text-lg'>{item.title}</p>
                  <p className='px-7'>{item.price}$</p>
                </div>
                <div className="text-xs">{item.description}</div>
                {/* <div className="rating">{ item.producer }</div> */}
                <div className="flex gap-x-3">
                  <button className='btn py-2 px-5 rounded-xl border-gray-100 bg-slate-800'>Shop</button>
                  <button  className='btn px-2 rounded-xl border-gray-100 bg-slate-800' onClick={() => { deleteInstrument(item.id); console.log(item.id) }}>Delete</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalog