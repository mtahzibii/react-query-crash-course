import React, {useState, useEffect} from 'react';
import Character from './Character';
import { useQuery } from 'react-query';


const API_URL = 'https://rickandmortyapi.com/api/character'

function Characters() {

  const [page, setPage] = useState(41)
  console.log(page);

  const fetchCharacters = async ({queryKey}) => {
    const res = await fetch(`${API_URL}/?page=${queryKey[1]}`)
    return await res.json()
}

const {data, status, isLoading, isError} = useQuery(['characters',page], fetchCharacters, {
  keepPreviousData: true
})

console.log(data);

if(isLoading) {
  return <div>Loading...</div> 
}

if(isError) {
  return <div>Error...</div>
}

  return (
    <>
      <div className='characters'>
        {data?.results.map((char, index) => (
          <Character key={index} char={char} />
        ))}
      </div >
      <div className='pagination'>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <button disabled={!data.info.next} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  )
}

export default Characters