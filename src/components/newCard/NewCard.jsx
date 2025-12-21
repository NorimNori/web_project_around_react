import React from "react";

export default function NewCard() {
  return (
    <form class="popup__form" name="card-form" id="new-card-form" noValidate>
      <label className="popup__field">
        <input
          type="text"
          id="card-name-input"
          class="popup__input"
          name="title"
          minlength="2"
          maxlength="30"
          placeholder="Título"
          required
        />
        <span id="card-name-input-error" class="popup__error"></span>
      </label>
      <label className="popup__field">
        <input
          type="url"
          id="card-link-input"
          class="popup__input"
          name="url"
          placeholder="Enlace a la imagen"
          required
        />
        <span id="card-link-input-error" class="popup__error"></span>
      </label>
      <button class="popup__save-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
