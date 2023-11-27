import React from 'react'

export type ProductData = {
  title: string;
  id: number;
}

type ProductProps = {
  id: number;
  title: string;
  deleteShown: boolean;
  onRemoveProduct: (id: number) => void;
}

const Product = ({ title, id, deleteShown, onRemoveProduct }: ProductProps) => {
  const removeProductHandler = () => {
    onRemoveProduct(id);
    console.log('delete', id)
  }

  return (
    <div className='flex p-2 border-4 border-slate-800 rounded-md justify-between items-center max-w-[370px] flex-1'>
      <p>{title}</p>
      <button className='button px-3 py-2' onClick={removeProductHandler}>DELETE</button>
    </div>
  )
}

export default Product