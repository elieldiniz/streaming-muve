// utils/api.ts

export default async function buscarFilmesPopulares(): Promise<any[]> {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=fb1cdcea5467d0fe3c1009cebe3c076d`;
  
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
//Exemplo de uso da função

// buscarFilmesPopulares()
//   .then(filmes => {
 
//     const filmesDetalhados = filmes.map(res => {
//         return {
//           title: res.title,
//           img: res.poster_path,
//           video: res.video,
//           release_date: res.release_date,
//           vote_average: res.vote_average
//         };
//       });
  
//       console.log(filmesDetalhados);


//   })
//   .catch(err => {
//     console.error('Erro ao buscar filmes populares:', err);
//   });
