import { useEffect, useState } from 'react'
import Panel from './components/Panel'
import ProductList from './components/ProductList'
import { ProductData } from './components/Product';

const App = () => {
  let dummyProducts: ProductData[] = [
    {
      id: 0,
      title: "Jajka"
    },
    {
      id: 1,
      title: "Mąka"
    },
    {
      id: 2,
      title: "Cukier"
    },
    {
      id: 3,
      title: "Majonez"
    },
    {
      id: 4,
      title: "Ketchup"
    },
    {
      id: 5,
      title: "Olej"
    },
  ]

  const [isProductListDisplayed, setProductListDisplay] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductData[]>(dummyProducts);
  const [recipeResponse, setRecipeResponse] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [areButtonsShown, setAreButtonsShown] = useState<boolean>(true);


  const removeProduct = (id: number) => {
    setProducts(() => products.filter((product: ProductData) => id !== product.id))
  }

  
  const fetchRecipe = () => {
    setIsFetching(true);
    setAreButtonsShown(false);

    let productsString = ' ';
    products.forEach((product: ProductData) => {
      productsString += product.title + ', ';
    })
  
    const currentTime = new Date();
    const formattedTime = currentTime.getHours() + ':' + currentTime.getMinutes();
  
    const formattedPrompt = "Przygotuj przepis używając punktów (kroków) ze składników: " + productsString + ". Potrawa musi być dostosowana do pory dnia, a jest godzina " + formattedTime
    
    fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: formattedPrompt })
    })
      .then(response => response.json())
      .then(data => {
        setIsFetching(false)
        console.log(data)
        setRecipeResponse(data.message)
      })
      .catch(error => console.error('Error while posting data: ', error))
  }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      {areButtonsShown ? (
        <>
          {isProductListDisplayed
            ?
            <ProductList type="delete"
              products={products} onProductListDisplayChange={setProductListDisplay}
              onRemoveProduct={removeProduct}
            />
            :
            <Panel
              onFetchRecipe={fetchRecipe}
              onProductListDisplayChange={setProductListDisplay} />
          }
        </>
      ) : null}
      {recipeResponse !== "" ? <div className='flex flex-col gap-4'>
        <p className='text-xl text-justify p-8'>{recipeResponse}</p>
        <button className='button px-8 py-2 m-auto' onClick={() => {
          setRecipeResponse("")
          setAreButtonsShown(true)
        }}>BACK</button>
      </div> : null}

      {isFetching ? <p>Preparing recipe...</p> : null}
    </div>
  )
}

export default App