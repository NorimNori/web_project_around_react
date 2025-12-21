import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="header page__section">
      <img className="header__image" src={logo} alt="Around the U.S.logo" />
    </header>
  );
}
