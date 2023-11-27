import React from 'react'

type PanelProps = {
  onProductListDisplayChange: (newDisplay: boolean) => void;
  onFetchRecipe: () => void;
}

const Panel = ({ onProductListDisplayChange, onFetchRecipe }: PanelProps) => {
  const productListDisplayChangeHandler = () => {
    onProductListDisplayChange(true);
  }

  return (
    <div className='p-4 rounded-md w-full h-full justify-center items-center flex flex-col'>
      {/* BUTTONS */}
      <div className='gap-4 flex flex-col w-[70%]'>
        <button className='button w-full panel-button' onClick={onFetchRecipe}>RUN</button>

        {/* BUTTONS TO MANIPULATE INGREDIENTS */}
        <div className='flex gap-4'>
          <button className='button action-button panel-button' onClick={productListDisplayChangeHandler}>REMOVE</button>
          <button className='button action-button panel-button'>ADD</button>
        </div>
      </div>
    </div>
  )
}

export default Panel