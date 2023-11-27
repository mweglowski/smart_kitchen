import React from 'react'
import Product, { type ProductData } from './Product';

type ProductListProps = {
  products: ProductData[];
  onProductListDisplayChange: (newDisplay: boolean) => void;
  onRemoveProduct: (id: number) => void;
  type: string;
}

const ProductList = ({ onProductListDisplayChange, onRemoveProduct, type, products }: ProductListProps) => {
  const hideProductList = () => {
    onProductListDisplayChange(false);
  }

  return (
    <div className='flex flex-col w-full p-4 gap-4'>
      {/* LIST */}
      <div className='flex flex-wrap gap-4 justify-center flex-1'>
        {products.map(({ title, id }: ProductData) => <Product title={title} id={id} deleteShown={type === "delete"} key={id} onRemoveProduct={onRemoveProduct} />)}
      </div>

      <button className='button m-auto py-3 px-16' onClick={hideProductList}>BACK</button>
    </div>
  )
}

export default ProductList