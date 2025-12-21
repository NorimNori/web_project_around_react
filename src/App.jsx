import logo from "./assets/images/logo.svg";
import Main from "./components/main/Main";

function App() {
  return (
    <div class="page__section page__content">
      <header class="header page__section">
        <img class="header__image" src={logo} alt="Around the U.S.logo" />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
