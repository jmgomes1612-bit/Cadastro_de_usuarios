import "./usercard.css";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-pic"></div>
      <div className="user-info">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.age}</p>
      </div>
    </div>
  );
}
export default UserCard;
