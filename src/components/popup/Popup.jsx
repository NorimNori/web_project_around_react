export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <section className="popup" id="profile-edit-popup">
      <div className="popup__container">
        <button
          className="popup__close"
          id="profile-popup-close-button"
          onClick={onClose}
        />
        <h3 className="popup__heading">{title}</h3>
        {children}
      </div>
    </section>
  );
}
