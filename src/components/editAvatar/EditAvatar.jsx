import { useState } from "react";

export default function EditAvatar({ onUpdateAvatar, onClose }) {
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar);
    onClose();
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <label className="popup__field">
        <input
          type="url"
          className="popup__input popup__input_avatar"
          name="avatar"
          placeholder="Profile image URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
        <span className="popup__error"></span>
      </label>
      <button type="submit" className="popup__save-button">
        Guardar
      </button>
    </form>
  );
}
