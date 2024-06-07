
export const Movies = ({ name, type, genre, vote }) => {
  return (
    <div>
      <h3>Título: {name}</h3>
      <p>Tipo: {type}</p>
      <p>Género: {genre}</p>
      <p>Nota: {vote}</p>
    </div>
  );
};
