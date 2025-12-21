import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header class="header page__section">
      <img class="header__image" src={logo} alt="Around the U.S.logo" />
    </header>
  );
}
