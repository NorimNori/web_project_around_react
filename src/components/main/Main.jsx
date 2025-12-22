import { useState } from "react";
import profile from "../../assets/images/Cindy-Campbell.jpeg";
import Popup from "../popup/Popup";
import NewCard from "../newCard/NewCard";
import EditAvatar from "../editAvatar/EditAvatar";
import EditProfile from "../editProfile/EditProfile";

export default function Main() {
  const [popups, setPopups] = useState({
    newCard: false,
    editProfile: false,
    editAvatar: false,
  });
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(name) {
    setPopups((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function handleClosePopup(name) {
    setPopups((prev) => ({
      ...prev,
      [name]: false,
    }));
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
          <div
            className="profile__image-edit"
            onClick={() => handleOpenPopup("editAvatar")}
          ></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Cindy Campbell</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup("editProfile")}
          ></button>
          <p className="profile__description">Reportera</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup("newCard")}
        ></button>
      </section>

      {popups.newCard && (
        <Popup onClose={handleClosePopup} title={newCardPopup.title}>
          {newCardPopup.children}
        </Popup>
      )}

      {popups.editProfile && (
        <Popup
          title={editProfilePopup.title}
          onClose={() => handleClosePopup(editProfilePopup.children)}
        >
          <EditProfile />
        </Popup>
      )}

      {popups.editAvatar && (
        <Popup
          title={editAvatarPopup.title}
          onClose={(handleClosePopup) =>
            handleClosePopup(editAvatarPopup.children)
          }
        >
          <EditAvatar />
        </Popup>
      )}
    </main>
  );
}
