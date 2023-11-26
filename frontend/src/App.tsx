import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message: 'API WORKS!'})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error while posting data: ', error))
  }, [])

  return (
    <div>App</div>
  )
}

export default App