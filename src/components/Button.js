import "./Button.css";

function Button({ children, variant = false, style = {}, className = "" }) {
  const cName = "btn " + className;
  return (
    <button className="btn" {...{ style, className: cName }}>
      {children}
    </button>
  );
}

export default Button;
