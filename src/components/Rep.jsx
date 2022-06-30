import "./Rep.css";

const Rep = ({ name, html_url, description }) => {
  return (
    <div className="rep">
      <a className="rep_link" href={html_url} target="_blank" rel="noreferrer">
        <h3 className="repo__title">{name}</h3>
      </a>    
      <p className="rep_description">{description}</p>
    </div>
  );
};

export default Rep;
