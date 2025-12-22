export default function EditProfile() {
  return (
    <form className="popup__form">
      <label className="popup__field">
        <input
          type="text"
          id="form-input-title"
          className="popup__input"
          name="title"
          minLength="2"
          maxLength="40"
          placeholder="Nombre"
          required
        />
        <span id="form-input-title-error" className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          id="form-input-description"
          class="popup__input"
          name="description"
          minLength="2"
          maxLength="200"
          placeholder="Acerca de mí"
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
