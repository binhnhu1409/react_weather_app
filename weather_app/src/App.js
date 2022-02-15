import { useState } from 'react';

const App = () => {

  const [locationName, setLocationName] = useState()

  const handleLocationChange = (event) => {
    console.log('button clicked', event.target.value)
    setLocationName(event.target.value)
  }

  return (
    <div>
      <form>
        <input
          value={locationName}
          onChange={handleLocationChange}
          placeholder='Please enter the name of a city'
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
