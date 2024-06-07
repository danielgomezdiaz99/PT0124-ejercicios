
export const SongsHeard = ({ songs }) => {
  return (
    <div>
      <h3>Songs Heard</h3>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};
