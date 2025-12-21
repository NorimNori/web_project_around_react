import logo from "./assets/images/logo.svg";
import profile from "./assets/images/Cindy-Campbell.jpeg";

function App() {
  return (
    <div class="page__section page__content">
      <header class="header page__section">
        <img class="header__image" src={logo} alt="Around the U.S.logo" />
      </header>

      <main class="content">
        <section class="profile page__section">
          <div class="profile__image-container">
            <img class="profile__image" src={profile} alt="Imágen de perfil" />
            <div class="profile__image-edit"></div>
          </div>
          <div class="profile__info">
            <h1 class="profile__title">Cindy Campbell</h1>
            <button class="profile__edit-button" type="button"></button>
            <p class="profile__description">Reportera</p>
          </div>
          <button class="profile__add-button" type="button"></button>
        </section>
      </main>

      <footer class="footer">
        <p class="footer__copyright">&copy; 2025 Gloria Rangel</p>
      </footer>
    </div>
  );
}

export default App;
