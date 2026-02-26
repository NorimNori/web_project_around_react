import { useEffect, useState } from "react";
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import { api } from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signin from "./signin/Signin.jsx";
import Signup from "./signup/Signup.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { auth } from "../utils/auth.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [tooltip, setTooltip] = useState({ isOpen: false, isSuccess: false });
  const navigate = useNavigate();

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

  async function handleSignin({ email, password }) {
    if (!email || !password) {
      setTooltip({ isOpen: true, isSuccess: false });
      return;
    }

    await auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch(() => {
        setTooltip({ isOpen: true, isSuccess: false });
      });
  }

  async function handleSignup({ email, password }) {
    auth
      .register(email, password)
      .then(() => {
        setTooltip({ isOpen: true, isSuccess: true });
        navigate("/signin");
      })
      .catch(() => {
        setTooltip({ isOpen: true, isSuccess: false });
      });
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        onUpdateAvatar: handleUpdateAvatar,
        handleSignin,
        handleSignup,
      }}
    >
      <div className="page__section page__content">
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Main
                  cards={cards}
                  onAddPlace={handleAddPlaceSubmit}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
