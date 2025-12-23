export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <section className="popup">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          className="popup__close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        />

        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </section>
  );
}
