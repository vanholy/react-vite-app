import { ReactNode } from "react";

interface Props {
  children: ReactNode; //potrei passare text, ma per struttura piu complessa uso react node
  onClose: () => void;
}
function AlertButton({ children ,onClose}: Props) {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default AlertButton;
