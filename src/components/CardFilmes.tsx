'use client'
import React, { useState, useEffect } from "react";
import FilmesList from "./componentsCard/FilmesList";
import buscarFilmesPopulares from '@/services/api';

// Defina um tipo para a estrutura de um filme
// Defina um tipo para a estrutura de um filme
interface Filme {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  poster_path: string
  // Outras propriedades do filme...
}

// Defina um tipo para as propriedades do CardFilmes
type CardFilmesProps = {
  searchQuery: string;
};

export default function CardFilmes({ searchQuery }: CardFilmesProps) {
  // Use o estado para armazenar os filmes filtrados
  const [filmesFiltrados, setFilmesFiltrados] = useState<Filme[]>([]);

  // Suponha que você tenha uma função para buscar todos os filmes
  const todosOsFilmes: Filme[] = buscarTodosOsFilmes();

  // Use useEffect para filtrar os filmes quando a consulta de pesquisa mudar
  useEffect(() => {
    // Implemente a lógica para filtrar os filmes com base na pesquisa
    const filmesFiltrados = filterFilmesPorQuery(todosOsFilmes, searchQuery);
    // Atualize o estado com os filmes filtrados
    setFilmesFiltrados(filmesFiltrados);
  }, [searchQuery]);

  return (
    <div className="bg-cyan-950">
      <h2 className={`flex justify-center text-2xl p-10 mt-10 text-emerald-500`}>
        Filmes Populares
      </h2>
      {/* Certifique-se de passar a propriedade 'items' com o tipo correto */}
      <FilmesList items={filmesFiltrados} />
    </div>
  );
}

// Suponha que você tenha uma função para buscar todos os filmes
function buscarTodosOsFilmes(): Filme[] {
  // Implemente a lógica para buscar todos os filmes
  const todosOsFilmes: Filme[] = [];
  // Lógica de busca...
  return todosOsFilmes;
}

// Implemente a lógica para filtrar os filmes com base na pesquisa
function filterFilmesPorQuery(filmes: Filme[], query: string): Filme[] {
  // Implemente a lógica para filtrar os filmes com base na pesquisa
  // Suponha que Filme seja uma interface que define a estrutura de um filme
  const filmesFiltrados: Filme[] = [];
  // Lógica de filtragem...
  return filmesFiltrados;
}
