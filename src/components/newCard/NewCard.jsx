export default function NewCard() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          type="text"
          id="card-name-input"
          class="popup__input"
          name="title"
          minLength="2"
          maxLength="30"
          placeholder="Título"
          required
        />
        <span id="card-name-input-error" className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input
          type="url"
          id="card-link-input"
          className="popup__input"
          name="url"
          placeholder="Enlace a la imagen"
          required
        />
        <span id="card-link-input-error" className="popup__error"></span>
      </label>
      <button className="popup__save-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
