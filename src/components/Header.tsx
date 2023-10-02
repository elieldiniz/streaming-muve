'use client'
import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";

type HeaderProps = {
  onSearch: (query: string) => void;
};

export default function Header({ onSearch }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Consulta de pesquisa:", searchQuery);
    onSearch(searchQuery); // Chame a função passada como propriedade para atualizar a pesquisa
  };

  // Função para passar a consulta de pesquisa para o CardFilmes
  const updateSearchQuery = (query: string) => {
    // Coloque aqui a lógica para passar a consulta de pesquisa para o CardFilmes
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery(""); // Limpa a consulta de pesquisa ao fechar
  };

  const Menu = () => {
    return (
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden justify-center gap-10 cursor-pointer text-cyan-500 font-medium md:items-center md:w-full md:text-center `}
      >
        <li className="border-b border-red-700">Filmes</li>
        <li className="border-b border-red-700">Series</li>
        <li className="border-b border-red-700">Mais</li>
      </ul>
    );
  };

  return (
    <header className="bg-slate-900 p-2 rounded-b-3xl border-double shadow-lg shadow-cyan-500/50 fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="flex items-center justify-center gap-2 max-[460px]:flex-col">
        <div>
          <h1 className="cursor-pointer flex items-center ">
            <span className="font-mono text-3xl font-bold text-red-600">MAX</span>
            <span className="font-serif text-2xl">Filmes</span>
          </h1>
        </div>
        <ul
          className={`flex max-[800px]:hidden justify-center gap-10 cursor-pointer text-cyan-500 font-medium md:items-center md:w-full md:text-center `}
        >
          <li className="border-b border-red-700">Filmes</li>
          <li className="border-b border-red-700">Series</li>
          <li className="border-b border-red-700">Mais</li>
        </ul>

        <div className="flex gap-2 ">
          {searchOpen ? (

            <div className="relative flex gap-1">
              <input
                type="text"
                placeholder="Procurar Filme..."
                className="border rounded-lg bg-gray-300 text-gray-800 p-1 pl-2 max-[320px]:w-40 h-9"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button
                className="absolute top-1 right-12 text-gray-700 hover:text-gray-950"
                onClick={closeSearch}
              >
                X
              </button>
              <button
                className="bg-gray-800 p-1 rounded-lg text-2xl hover:bg-cyan-500 hover:text-black"
                onClick={handleSearch}
              >
                <SlMagnifier />
              </button>
            </div>
          ) : (
            <button
              className="bg-gray-800 p-1 rounded-lg text-2xl hover:bg-cyan-500 hover:text-black"
              onClick={toggleSearch}
            >
              <SlMagnifier />
            </button>
          )}



          <div className="flex">
            <Menu />
            <button
              className="md:hidden text-2xl p-1 text-red-600 hover:text-red-800"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
