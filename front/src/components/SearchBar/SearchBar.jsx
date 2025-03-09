import { useState } from "react";

const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("")

   const handleChange = (evento) => {
      setId(evento.target.value)
   }

   const handleClick = () => {
      onSearch(id);  // Pasamos el valor de `id` a la función onSearch
   };

   return (
      <div>
         <input onChange={handleChange} value={id} type='search' />
         <button onClick={handleClick}>Agregar</button> 
      </div>
   );
}

export default SearchBar;
