import useUserData from "./CustomHook/useUserData";

const User = () => {
  const user = useUserData();
  const { name, avatar_url, location } = user;
  return (
    <div className="user-card">
      <img src={avatar_url} alt="" />
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
    </div>
  );
};

export default User;
