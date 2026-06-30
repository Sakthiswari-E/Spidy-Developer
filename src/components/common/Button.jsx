const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-7 py-3 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-red-600/50"
    >
      {text}
    </button>
  );
};

export default Button;