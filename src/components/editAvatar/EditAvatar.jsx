export default function EditAvatar() {
  return (
    <form className="popup__form" id="popup-avatar__form">
      <button className="popup__close" id="popup-avatar__close"></button>
      <label className="popup__field">
        <input
          type="url"
          id="popup__input_avatar"
          class="popup__input popup__input_avatar"
          name="avatar"
          minLength="2"
          placeholder="Perfil url"
        />
        <span className="popup__error" id="popup__input_avatar-error"></span>
      </label>
      <button
        type="submit"
        className="popup__save-button"
        id="popup-avatar__button"
      >
        Guardar
      </button>
    </form>
  );
}
