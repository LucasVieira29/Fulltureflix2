import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [movieData, setMovieData] = useState([])
    console.log({ movieData })
    

    function getMoviesById (id) {
        return movieData.find(movie => movie.id == id)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        api_key: "3c57e2cf1785854198d17584cdbd86ce",
                        language: "pt-BR",
                        page: 1,
                    }
                });
    
                const movies = await Promise.all(
                    response.data.results.map(async (movie) => {
                        const movieCompleteData = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
                            params: {
                                api_key: "3c57e2cf1785854198d17584cdbd86ce",
                                language: "pt-BR",
                            }
                        });
                        return movieCompleteData.data;
                    })
                );
    
                setMovieData(movies);
                console.log("Movie Data", { movieData });
                console.log("SetMovie Data", movieData);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <MovieContext.Provider value={{ movieData, getMoviesById }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieProvider }