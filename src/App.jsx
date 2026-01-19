import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { api } from "./utils/api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.jsx";

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

  function handleCardLike(card) {
    const likeRequest = card.isLiked
      ? api.removeLike(card._id)
      : api.addLike(card._id);

    likeRequest
      .then((updatedCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? updatedCard : c)),
        );
      })
      .catch(console.error);
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__section page__content">
        <Header />
        <Main
          cards={cards}
          onUpdateUser={handleUpdateUser}
          onAddPlace={handleAddPlaceSubmit}
          onUpdateAvatar={handleUpdateAvatar}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
