import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { api } from "./utils/api.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.error);

    api.getInitialCards().then(setCards).catch(console.error);
  }, []);

  function handleUpdateUser({ name, about }) {
    api
      .updateUserInfo(name, about)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch(console.error);
  }

  function handleAddPlaceSubmit(cardData) {
    api
      .addNewCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch(console.error);
  }

  function handleUpdateAvatar(avatarUrl) {
    api
      .updateAvatar(avatarUrl)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch(console.error);
  }

  return (
    <div className="page__section page__content">
      <Header />
      <Main
        currentUser={currentUser}
        cards={cards}
        onUpdateUser={handleUpdateUser}
        onAddPlace={handleAddPlaceSubmit}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <Footer />
    </div>
  );
}

export default App;
