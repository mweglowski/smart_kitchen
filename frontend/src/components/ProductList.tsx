import React from 'react'
import Product, { type ProductData } from './Product';

type ProductListProps = {
  products: ProductData[];
  onProductListDisplayChange: (newDisplay: boolean) => void;
  type: string;
}

const ProductList = ({ onProductListDisplayChange, type, products }: ProductListProps) => {
  const hideProductList = () => {
    onProductListDisplayChange(false);
  }

  return (
    <div className='flex flex-col w-full p-4 gap-4'>
      {/* LIST */}
      <div className='flex flex-wrap gap-4 justify-center flex-1'>
        {products.map(({ title }: ProductData) => <Product title={title} deleteShown={type === "delete"} key={Math.random()} />)}
      </div>

      <button className='button m-auto py-3 px-16' onClick={hideProductList}>BACK</button>
    </div>
  )
}

export default ProductList