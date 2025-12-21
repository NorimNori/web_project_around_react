export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <section class="popup" id="profile-edit-popup">
      <div class="popup__container">
        <button
          class="popup__close"
          id="profile-popup-close-button"
          onClick={onClose}
        ></button>
        <h3 class="popup__heading">{title}</h3>
        {children}
      </div>
    </section>
  );
}
