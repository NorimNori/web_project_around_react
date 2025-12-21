import logo from "./assets/images/logo.svg";
import Main from "./components/main/Main";

function App() {
  return (
    <div class="page__section page__content">
      <header class="header page__section">
        <img class="header__image" src={logo} alt="Around the U.S.logo" />
      </header>
      <Main />

      <footer class="footer">
        <p class="footer__copyright">&copy; 2025 Gloria Rangel</p>
      </footer>
    </div>
  );
}

export default App;
