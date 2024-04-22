import { useLogin } from "../Hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>Halaman Profil</h1>
      Selamat datang : {username}
    </div>
  );
};

export default ProfilePage;
