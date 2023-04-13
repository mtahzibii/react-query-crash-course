import React from 'react'


const Character = ({char}) => {
  return (
    <div className='character'>
        <img src={char.image} alt={char.name} />
        <div className='character-info'>
            <h3>{char.name}</h3>
            <p>{char.status}-{char.species}</p>

            <p className='last-seen'>Last seen on</p>
            <p>{char.location.name}</p>
        </div>
    </div>
  )
}

export default Character
