export default function InfoTooltip({ isOpen, onClose, isSuccess }) {
  if (!isOpen) return null;

  return (
    <div className="modal modal_opened">
      <div className="modal__container modal__container_type_tooltip">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <div
          className={`modal__tooltip-icon ${
            isSuccess
              ? "modal__tooltip-icon_type_success"
              : "modal__tooltip-icon_type_error"
          }`}
        />
        <p className="modal__tooltip-text">
          {isSuccess
            ? "¡Correcto! Ya estás registrado."
            : "Uy, algo salió mal. Por favor, inténtalo de nuevo."}
        </p>
      </div>
    </div>
  );
}
