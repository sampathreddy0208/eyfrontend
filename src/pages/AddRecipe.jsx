import React, { useState } from 'react';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Breakfast',
    image: null,
    instructions: '',
    time: '',
    ingredients: ''
  });

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('instructions', formData.instructions);
    formDataToSend.append('time', formData.time);
    formDataToSend.append('ingredients', formData.ingredients);

    const response = await fetch('/api/recipes', {
      method: 'POST',
      body: formDataToSend,
    });

    if (response.ok) {
      alert("Recipe added successfully!");
      window.location.href = "/home";
    } else {
      alert("Failed to add recipe. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Add Recipe</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select
            className="form-select"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Time (in minutes):</label>
          <input
            type="number"
            className="form-control"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients:</label>
          <textarea
            className="form-control"
            value={formData.ingredients}
            onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions:</label>
          <textarea
            className="form-control"
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
