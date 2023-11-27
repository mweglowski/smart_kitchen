import { useEffect, useState } from 'react'
import Panel from './components/Panel'
import ProductList from './components/ProductList'
import { ProductData } from './components/Product';

const App = () => {
  const [isProductListDisplayed, setProductListDisplay] = useState<boolean>(false);

  const products: ProductData[] = [
    {
      title: "Jajka"
    },
    {
      title: "Mąka"
    },
    {
      title: "Cukier"
    },
    {
      title: "Majonez"
    },
    {
      title: "Ketchup"
    },
    {
      title: "Olej"
    },
  ]

  const fetchRecipe = () => {
    fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: "What cook when I have milk, butter, water, flour, eggs, bananas, apples? It is 8pm, consider that."})
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error while posting data: ', error))
  }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      {isProductListDisplayed
        ?
        <ProductList type="delete"
          products={products} onProductListDisplayChange={setProductListDisplay} />
        :
        <Panel 
        onFetchRecipe={fetchRecipe}
        onProductListDisplayChange={setProductListDisplay} />
      }
    </div>
  )
}

export default App