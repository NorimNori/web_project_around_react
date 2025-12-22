import React from "react";

export default function EditAvatar() {
  return (
    <form class="popup__form" id="popup-avatar__form">
      <button class="popup__close" id="popup-avatar__close"></button>
      <label className="popup__field">
        <input
          type="url"
          id="popup__input_avatar"
          class="popup__input popup__input_avatar"
          name="avatar"
          minlength="2"
          placeholder="Perfil url"
        />
        <span class="popup__error" id="popup__input_avatar-error"></span>
      </label>
      <button
        type="submit"
        class="popup__save-button"
        id="popup-avatar__button"
      >
        Guardar
      </button>
    </form>
  );
}
