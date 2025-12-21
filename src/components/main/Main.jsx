import { useState } from "react";
import profile from "../../assets/images/Cindy-Campbell.jpeg";
import Popup from "../popup/Popup";
import NewCard from "../newCard/NewCard";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={profile}
            alt="Imágen de perfil"
          />
          <div className="profile__image-edit"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Cindy Campbell</h1>
          <button className="profile__edit-button" type="button"></button>
          <p className="profile__description">Reportera</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
