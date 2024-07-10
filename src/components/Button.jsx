const Button = ({ children, onClick }) => {
  return (
    <button className="modal-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
