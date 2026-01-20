import { useEffect, useState } from "react";
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import { api } from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await api.getUserInfo();
        setCurrentUser(userData);

        const initialCards = await api.getInitialCards();
        setCards(initialCards);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  async function handleUpdateUser({ name, about }) {
    try {
      const updatedUser = await api.updateUserInfo(name, about);
      setCurrentUser(updatedUser);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddPlaceSubmit(cardData) {
    try {
      const newCard = await api.addNewCard(cardData);
      setCards((prevCards) => [newCard, ...prevCards]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateAvatar({ avatarUrl }) {
    try {
      const updatedUser = await api.updateAvatar({ avatarUrl });
      setCurrentUser(updatedUser);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardLike(card) {
    try {
      const updatedCard = card.isLiked
        ? await api.removeLike(card._id)
        : await api.addLike(card._id);

      setCards((state) =>
        state.map((c) => (c._id === card._id ? updatedCard : c)),
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);

      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        onUpdateAvatar: handleUpdateAvatar,
      }}
    >
      <div className="page__section page__content">
        <Header />
        <Main
          cards={cards}
          onAddPlace={handleAddPlaceSubmit}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
