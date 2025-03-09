import Card from '../Card/Card.jsx'

const Cards = ({characters, onClose }) => {
   const personaje = characters.map((character) => 
      <Card key={character.id} 
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
      />
   );

   return (
      <div>
         {personaje}
      </div>
   );
}

export default Cards