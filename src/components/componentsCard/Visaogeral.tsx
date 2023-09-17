import React from 'react';


interface VisaogeralProps {
  overview: string;
  onClose: () => void; // Função para fechar a visualização de detalhes
}

export default function Visaogeral({ overview, onClose }: VisaogeralProps) {
  return (
    <div className=''>
      <p>{overview}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}
