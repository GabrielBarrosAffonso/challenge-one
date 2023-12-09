import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useFilter } from './hooks/useFilter';

function App() {
  const [breeds, setBreeds] = useState([])
  const [sorting, setSorting] = useState<string>('name')
  const filteredItems = useFilter(breeds, sorting)

  useEffect(() => {
    async function getDogs(page: number): Promise<null> {
      try {
        const { data: result } = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=100&page=${page}`, {
          headers: {
            'x-api-key': 'live_k5wh84cFzYdntvuttK8ZV1f7sCcovjZ05uIhdctqQo4YS1hSqKtZgKzfr9R8tbCo'
          }
        })
  
        if(result.length > 0) {
          setBreeds(state => [...state, ...result])
          getDogs(page + 1)
        }
      } catch(err){
        console.error(err)
      }
  
      return null
    }

    getDogs(0)
  }, [])

  return (
    <div className="App">
        <select title="test-select" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSorting(e.target.value)}>
          <option value='name'>Name</option>
          <option value='nameReverse'>Name Reverse</option>
          <option value="id">ID</option>
          <option value="idReverse">ID reverse</option>
        </select>
        <p>
          {
            filteredItems.map((i) => {
              return<li>
                <span>{i.id}</span>
                  <span>{i.name}</span>
                </li>
            })
          }
        </p>
    
    </div>
  );
}

export default App;
