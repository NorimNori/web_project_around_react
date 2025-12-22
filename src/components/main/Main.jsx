import { useState } from "react";
import profile from "../../assets/images/Cindy-Campbell.jpeg";
import Popup from "../popup/Popup";
import NewCard from "../newCard/NewCard";
import EditAvatar from "../editAvatar/EditAvatar";
import EditProfile from "../editProfile/EditProfile";

export default function Main() {
  const [newCardState, setNewCardState] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatar = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setNewCardState(popup);
  }

  function handleClosePopup() {
    setNewCardState(null);
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

      {newCardState && (
        <Popup onClose={handleClosePopup} title={newCardState.title}>
          {newCardState.children}
        </Popup>
      )}
    </main>
  );
}
