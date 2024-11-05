export const Button = props => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="mt-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-non focus:ring-opacity-75 transition duration-300 ease-in-out"
    >
      {props.children}
    </button>
  );
};
