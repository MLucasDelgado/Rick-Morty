import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";

const Card = ({ id, name, status, gender, origin, image, onClose }) => {
   const dispatch = useDispatch();
   
   // Obtiene los favoritos del estado global
   const myFavorites = useSelector((state) => state.myFavorites);

   // Verifica si el personaje está en favoritos
   const isFav = myFavorites.some((fav) => fav.id === id);

   const handleFavorite = () => {
      if (isFav) {
         dispatch(removeFav(id));
      } else {
         dispatch(addFav({ id, name, status, gender, origin, image }));
      }
   };

   return (
      <div>
         {/* El estado de ❤️/🤍 ahora depende de Redux */}
         <button onClick={handleFavorite}>
            {isFav ? "❤️" : "🤍"}
         </button>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

export default Card;
