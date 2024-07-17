require('dotenv').config()

export default async function buscarFilmes(): Promise<any[]> {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${process.env.SECRET_KEY}`;
      const options: RequestInit = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      };
  
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
  
      const data = await response.json();
      return data.results

  

    } catch (error) {
      console.error('Ocorreu um erro:', error);
      throw error;
    }
}