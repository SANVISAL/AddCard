import React, { useState } from "react";
import { useCardContext } from "@/components/Cardcontext/Cardcontext";

const FormAdd = () => {
  // Use destructuring to get the addNewCard function from the context
  const { addNewCard } = useCardContext();
  const [name, setName]= useState("");
  const [image,setImage]= useState("")
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.image) {
      setError("Please fill in all fields");
      return;
    }
    addNewCard(formData); // Add new card to the card list
    setFormData({ name: "", image: null }); // Clear form data
    setError("");
  };

  //   manage  on file imge
  const handleOnUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        setError("File must be lower than 5MB");
        setFormData((prevUser) => ({
          ...prevUser,
          image: null,
        }));
      } else {
        const imageUrl = URL.createObjectURL(file);
        setFormData((prevUser) => ({
          ...prevUser,
          image: imageUrl,
        }));
        setError("");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block text-black w-full border-gray-300 rounded-md  bg-red-100 "
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 "
          >
            Image:
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleOnUploadFile}
            className="mt-1 p-2 block w-full bg-red-100 border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export { FormAdd };
