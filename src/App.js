import './App.css';
import "milligram";
import {useState} from "react";

function App() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [movies, setMovies] = useState([]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function handleMovieSubmit(event)
  {
    const newMovie = {};
    newMovie.title = title
    newMovie.year = year
    setMovies([...movies, newMovie]);
  }

  let message = "";
  if (title.length < 4)
    message = "Tytuł jest za krótki";
  else if (title.length < 15)
    message = "Tytuł jest OK"
  else
    message = "Tytuł jest za długi"

  return (
    <div>
      <h1>My favourite movies to watch</h1>

      <h2>Titles</h2>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
      </ul>

      <h2>Add movie</h2>

      <h3>Title</h3>
      <input type="text" value={title} onChange={handleTitleChange}/>

      {
        title.length > 0 && <div>{message}</div>
      }

      <h3>Year</h3>
      <input type="text" value={year} onChange={handleYearChange}/>

      <button onClick={handleMovieSubmit}>Add</button>


      {/* <h2>My favourite movie for today is {title}</h2>
      {
        title.length > 0 && <div>{message}</div>
      }
      <input type="text" value={title} onChange={handleChange}/>
      <button onClick={() => alert(title)}>Pokaż tytuł filmu</button> */}
    </div>
  );
}

export default App;
