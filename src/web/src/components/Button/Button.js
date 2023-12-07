import Loader from "../Loader";
import "./styles.css";

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  isLoading = false,
}) {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {isLoading ? (
        <div className="button__loader">
          <Loader color="#E9E9EA" isLoading={true} />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
