import { SlMagnifier } from "react-icons/sl";
export default function Header(){

  
    return(
        <header className='bg-slate-900 p-2 rounded-b-3xl border-double shadow-lg shadow-cyan-500/50 fixed top-0 left-0 right-0 z-50 transition-all'>
        
        <div className='flex justify-around items-center max-[861px]'>
          <div>
            <h1 className="boder border-b-2 border-red-600 cursor-pointer">
              <span className="font-mono text-3xl font-bold text-red-600">MAX</span>
              <span className="font-serif text-2xl"> Filmes</span>
            </h1>
          </div>
          <ul className='flex gap-10 cursor-pointer text-cyan-500 font-medium '>
            <li className="border-b border-red-700">Filmes</li>
            <li className="border-b border-red-700">Series</li>
            <li className="border-b border-red-700">Mais</li>
          </ul>
          <div>
            <div className="flex gap-2">
              <input type="text" placeholder="Procurar Filme..."
                className="border rounded-lg bg-gray-300 text-gray-800 p-1 pl-2" />
              <button className="bg-gray-800 p-1 rounded-lg text-2xl hover:bg-cyan-500 hover:text-black">
                <SlMagnifier />
              </button>

              <button className="sm-[310px]:hidden text-2xl p-2 text-red-600 hover:text-red-800">
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
      
    )
}