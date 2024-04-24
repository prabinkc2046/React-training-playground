import React from 'react';
import { useJoke } from './hooks/useJokes';
export default function Joke() {
    const { joke, loading, error} = useJoke();

  return (
    <div>
    {loading ? 
    (<p>is loading</p>) 
    : error ? 
    (<p>{error}</p>)
    :
     (<p> Joke : {joke}</p>)}
    </div>
  )
}
