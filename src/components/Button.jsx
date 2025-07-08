function Button({ children }) {
  return (
    <button className="bg-transparent border rounded-full px-6 py-4 border-indigo-700 cursor-pointer text-white font-semibold hover:border-white">
      {children}
    </button>
  );
}

export default Button;
