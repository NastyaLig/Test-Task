import "./EmptyState.css";

const EmptyState = ({ icon, text, noRepos }) => {
  return (
    <div className={`${noRepos ? "empty-repos-state" : "empty-state"}`}>
      <img className="empty-state_img" src={icon} alt="search" />
      <p className="empty-state_text">{text}</p>
    </div>
  );
};

export default EmptyState;