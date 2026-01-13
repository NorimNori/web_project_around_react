import { useState } from "react";

export default function EditProfile({ currentUser, onUpdateUser, onClose }) {
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about,
    });

    onClose();
  }
  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <label className="popup__field">
        <input
          type="text"
          id="form-input-title"
          className="popup__input"
          name="title"
          minLength="2"
          maxLength="40"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <span id="form-input-title-error" className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          id="form-input-description"
          className="popup__input"
          name="description"
          minLength="2"
          maxLength="200"
          placeholder="Acerca de mí"
          onChange={(e) => setAbout(e.target.value)}
          required
        />
        <span id="form-input-description-error" className="popup__error"></span>
      </label>
      <button className="popup__save-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
