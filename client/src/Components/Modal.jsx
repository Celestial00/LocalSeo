// Components/Modal.jsx
import { Link } from "react-router-dom";

export default function Modal({ title, description, onClose }) {
  return (
    <div
      className="  fixed inset-0 flex items-center [font-family:'Poppins',sans-serif] justify-center z-50 backdrop-blur-md"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.4)" }}
    >
      <div className="bg-white mr-2 ml-2 p-6 ] rounded-lg shadow-lg max-w-3xl h-50 w-full">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <button
          onClick={onClose}
          className="mt-2 mr-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>

        <Link to="/register">
          {" "}
          <button
            onClick={onClose}
            className="mt-2 mr-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
