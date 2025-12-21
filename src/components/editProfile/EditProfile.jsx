export default function EditProfile() {
  return (
    <form class="popup__form">
      <label className="popup__field">
        <input
          type="text"
          id="form-input-title"
          class="popup__input"
          name="title"
          minlength="2"
          maxlength="40"
          placeholder="Nombre"
          required
        />
        <span id="form-input-title-error" class="popup__error"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          id="form-input-description"
          class="popup__input"
          name="description"
          minlength="2"
          maxlength="200"
          placeholder="Acerca de mí"
          required
        />
        <span id="form-input-description-error" class="popup__error"></span>
      </label>
      <button class="popup__save-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
