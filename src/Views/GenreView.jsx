import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStoreContext } from "../Context";
import "./GenreView.css";

function GenreView() {
    const [movies, setMovies] = useState([]);
    const param = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    let page = useRef(1);
    let pages = useRef(0);
    const { cart, setCart } = useStoreContext();

    useEffect(() => {
        async function getData() {
            page.current = 1;
            const res = ((await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${param.genre_id}&api_key=${import.meta.env.VITE_TMDB_KEY}`)).data);
            setMovies(res.results);
            pages.current = res.total_pages;
        }
        getData();
    }, [param.genre_id]);

    const getMoreData = async (direction) => {
        const nextPage = page.current + direction;
        if (nextPage > 0 && nextPage <= pages.current) {
            setLoading(true);
            page.current = nextPage;
            try {
                setMovies((await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${nextPage}&sort_by=popularity.desc&with_genres=${param.genre_id}&api_key=${import.meta.env.VITE_TMDB_KEY}`)).data.results);
            } catch (error) {
                console.log("Error fetching API");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <div className="movie-container">
                {movies && movies.map(movie => (
                    <div>
                        <div className="movie-card" key={movie.id} onClick={() => navigate(`/movies/details/${movie.id}`)}>
                            <h1>{`${movie.title}`}</h1>
                            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
                        </div>
                        <button className="buyButtons" onClick={() => setCart((prevCart) => prevCart.set(movie.id, movie))
                            //  disabled={movie.id === cart.map(key)}
                        }>Buy</button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => getMoreData(-1)} disabled={loading || page.current === 1}>Prev</button>
                <p>{`Page ${page.current} of ${pages.current}`}</p>
                <button onClick={() => getMoreData(1)} disabled={loading || page.current === pages.current}>Next</button>
            </div>
            {loading && <p>Loading...</p>}
        </div >
    )
}

export default GenreView;