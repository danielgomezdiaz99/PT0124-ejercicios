import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="languages card">
        <h2>Languages</h2>
        <p>{languages.language}</p>
        <p>Writing Level: {languages.wrlevel}</p>
        <p>Speaking Level: {languages.splevel}</p>
      </div>

      <div className="habilities card">
        <h2>Habilities</h2>
        <ul>
          {habilities.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="volunteer card">
        <h2>Volunteer</h2>
        {volunteer.map((item, index) => (
          <div key={index} className="volunteer-item">
            <h3>{item.name}</h3>
            <p>{item.where}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
