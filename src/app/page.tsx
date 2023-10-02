'use client'

import React, { useState } from 'react';
import Header from '@/components/Header';
import CardFilmes from '@/components/CardFilmes';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Função para receber a pesquisa de Header e passá-la para CardFilmes
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className=''>
      {/* Passe a função handleSearch para Header */}
      <Header onSearch={handleSearch} />
      {/* Passe a pesquisa para CardFilmes */}
      <CardFilmes searchQuery={searchQuery} />
    </div>
  );
}
