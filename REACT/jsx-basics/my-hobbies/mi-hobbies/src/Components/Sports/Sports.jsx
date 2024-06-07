
export const Sports = ({ name, indoor, favoriteTeam }) => {
  return (
    <div>
      <h3>Deporte: {name}</h3>
      <p>Indoor: {indoor ? 'Yes' : 'No'}</p>
      <p>Favorite Team: {favoriteTeam}</p>
    </div>
  );
};
