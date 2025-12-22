import { useState } from "react";
import profile from "../../assets/images/Cindy-Campbell.jpeg";
import Popup from "../popup/Popup";
import NewCard from "../newCard/NewCard";
import EditAvatar from "../editAvatar/EditAvatar";
import EditProfile from "../editProfile/EditProfile";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

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
