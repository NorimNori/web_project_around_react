import { useState } from "react";
import profile from "../../assets/images/Cindy-Campbell.jpeg";
import Popup from "../popup/Popup";
import NewCard from "../newCard/NewCard";
import EditAvatar from "../editAvatar/EditAvatar";
import EditProfile from "../editProfile/EditProfile";
import Card from "../card/Card";
import ImagePreview from "../imagePopup/ImagePreview";

const cards = [
  {
    name: "Silent Hill, Toluca Lake",
    link: "https://plus.unsplash.com/premium_photo-1669689972709-c4a9a9a4cbbe?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "3600 Prospect Street",
    link: "https://plus.unsplash.com/premium_photo-1676657955502-405b78e1e900?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wizard Island",
    link: "https://images.unsplash.com/photo-1706195015965-9ba2e20b5837?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Black Hills Forest",
    link: "https://plus.unsplash.com/premium_photo-1698501025921-53646a4279c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Raccon City, Police station",
    link: "https://images.unsplash.com/photo-1730492109404-bf4ad0a78f3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hotel Timberline",
    link: "https://images.unsplash.com/photo-1714237570574-bffa98593a68?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Main() {
  const [popups, setPopups] = useState({
    newCard: false,
    editProfile: false,
    editAvatar: false,
    imagePreview: null,
  });
  console.log("STATE imagePreview:", popups.imagePreview);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(name, value = true) {
    setPopups((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClosePopup(name) {
    setPopups((prev) => ({
      ...prev,
      [name]: name === "imagePreview" ? null : false,
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
          />
          <p className="profile__description">Reportera</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup("newCard")}
        />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={(card) => handleOpenPopup("imagePreview", card)}
            />
          ))}
        </ul>
      </section>

      {popups.newCard && (
        <Popup
          onClose={() => handleClosePopup("newCard")}
          title={newCardPopup.title}
        >
          {newCardPopup.children}
        </Popup>
      )}

      {popups.editProfile && (
        <Popup
          title={editProfilePopup.title}
          onClose={() => handleClosePopup("editProfile")}
        >
          {editProfilePopup.children}
        </Popup>
      )}

      {popups.editAvatar && (
        <Popup
          title={editAvatarPopup.title}
          onClose={() => handleClosePopup("editAvatar")}
        >
          {editAvatarPopup.children}
        </Popup>
      )}
      {popups.imagePreview && (
        <Popup onClose={handleClosePopup} title={null}>
          <ImagePreview
            card={popups.imagePreview}
            onClose={() => handleClosePopup("imagePreview")}
          />
        </Popup>
      )}
    </main>
  );
}
