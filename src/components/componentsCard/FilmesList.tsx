
import React, { useState, useEffect } from 'react';
import buscarFilmesPopulares from '@/services/api';
import Image from 'next/image';
import Visaogeral from '@/components/componentsCard/Visaogeral'

// Defina uma interface para o objeto 'filme'
interface Filme {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  poster_path: string
}

interface FilmesListProps {
  items: Filme[]; // onde 'Filme' é o tipo definido anteriormente
}

async function fetchFilmesPopulares() {
  try {
    const filmes = await buscarFilmesPopulares();
    return filmes;
  } catch (error) {
    console.error('Ocorreu um erro:', error);
    throw error;
  }
}

export default function FilmesList({ items }: FilmesListProps) {
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme | null>(null);
  const [filmes, setFilmes] = useState<Filme[]>([]);

  const toggleDetalhes = (filme: Filme) => {
    setFilmeSelecionado(filme);
  };

  const fecharDetalhes = () => {
    setFilmeSelecionado(null);
  };

  useEffect(() => {
    fetchFilmesPopulares().then((filmes) => {
      setFilmes(filmes);
    });
  }, []); // Executa apenas uma vez no carregamento inicial

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-4 content-center max-w-7xl mx-auto p-4`}>
      {filmes.map((filme) => (
        <div key={filme.id} className="bg-slate-900 border border-emerald-500 w-64 mt-5 m-auto rounded-lg flex-1  shadow-lg shadow-cyan-500/50">
          <div className='text-sky-400/50'>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
            alt={filme.title}
            width={150}
            height={150}
            className='m-auto mt-3 rounded-lg'
          />
            <div className='flex flex-col justify-center items-center'>
                  <h3 className='text-sky-500'>{filme.title}</h3>
                <p>
                  <span className='text-emerald-300'>Lançamento: </span>
                  {filme.release_date}
                </p>
                <p>
                  <span className='text-emerald-300'>Popularidade: </span>
                   {filme.popularity}
                </p>
                <p>
                  <span className='text-emerald-300'>Média de Votos: </span>
                   {filme.vote_average}
                </p>

                <button onClick={() => toggleDetalhes(filme)} className='text-red-700'>Sobre</button>

                   {filmeSelecionado?.id === filme.id && (
                  <div className="notificacao bg-slate-500 text-slate-900 w-64 mb-36 rounded-lg text-sm text-justify text-sky-400/50 bg-opacity-50 backdrop-blur-md p-4 shadow-lg">
                    <Visaogeral overview={filmeSelecionado.overview} onClose={fecharDetalhes} />
                  </div>)}

            </div>
          
          </div>
        </div>
      ))}
    </div>
  );
}
