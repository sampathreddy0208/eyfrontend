import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes'); // Adjust the endpoint as needed
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || recipe.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to RecipeShare</h1>
      <div className="text-center mb-4">
        <Link to="/add-recipe" className="btn btn-primary">Add Recipe</Link>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search recipes..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select mt-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div className="row mb-4">
        {filteredRecipes.map((recipe) => (
          <div className="col-md-4" key={recipe.id}>
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Time: {recipe.time} minutes</p>
                <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
