import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import './ProfilePage.styles.scss';

function ProfilePage() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <div className="profilepage">
        <div className="profilepage__card">
          <div className="profilepage__figure">
            <img className="profilepage__image" src="https://yt3.ggpht.com/yti/APfAmoGP8PcEjgClmNvfUha5UwyjuKnzQdX1kN27kOfMpQ=s108-c-k-c0x00ffffff-no-rj" alt="perfil" />
          </div>
          <ul className="profilepage__info">
            <li className="profilepage__info--name">
              <strong>{user.displayName}</strong>
            </li>
            <li>{user.email}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
