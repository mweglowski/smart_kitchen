import React from 'react'

export type ProductData = {
  title: string;
}

type ProductProps = {
  title: string;
  deleteShown: boolean;
}

const Product = ({ title, deleteShown }: ProductProps) => {
  return (
    <div className='flex p-2 border-4 border-slate-800 rounded-md justify-between items-center max-w-[370px] flex-1'>
      <p>{title}</p>
      <button className='button px-3 py-2'>DELETE</button>
    </div>
  )
}

export default Product