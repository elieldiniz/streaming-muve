
import React from 'react';
import FilmesList from './componentsCard/FilmesList';




export default function CardFilmes(){
  return (
    <div className='bg-cyan-950 '>
      <h2 className={`flex justify-center text-2xl p-10 mt-10 text-emerald-500`}>
        Filmes Populares
      </h2>
      <FilmesList />
    </div>
  );
}
