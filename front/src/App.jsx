import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import Error404 from './components/Error404/Error404'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, use } from 'react'
import { useDispatch } from 'react-redux'
import { removeFav } from './redux/actions/actions'
import axios from 'axios'
import './App.css'

function App() {

  const dispatch = useDispatch()
  // Acceso al formulario
  const [access, setAccess] = useState(false);

  const navigate = useNavigate()

  const login = (userData) => {
    // userdata son los datos del formulario
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
  }

  const logOut = () => {
    setAccess(false)
    navigate('/')
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  // Personajes
  const [characters, setCharacters] = useState([])

  // Personaje de ejemplo que se agregará al estado
  const example = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => {
          // Verificamos si el personaje ya existe en el estado
          if (oldChars.some((char) => char.id === data.id)) {
            window.alert('¡Este personaje ya está en pantalla!');
            return oldChars; // No agregamos nada, devolvemos el mismo estado
          }
          return [...oldChars, data]; // Agregamos el nuevo personaje
        });
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    })
    return () => {
      setCharacters([])
      console.log(characters)
    }
  };

  const onClose = (idEstado) => {
    const idParcheado = Number(idEstado);
    dispatch(removeFav(idParcheado))

    const nuevosPersonajes = characters.filter((character) => character.id !== idParcheado);

    setCharacters(nuevosPersonajes);
  };

  const PersonajeRandom = () => {
    const idRandom = Math.floor(Math.random() * 826) + 1
    axios(`http://localhost:3001/rickandmorty/character/${idRandom}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data])
      }
    });
  }

  const { pathname } = useLocation()

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} PersonajeRandom={PersonajeRandom} logOut={logOut} />}
      {/* Mostrar los personajes si el estado contiene al menos uno */}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
        <Route path='*' element={<Error404 />} />
      </Routes>

    </div>
  );
}

export default App
