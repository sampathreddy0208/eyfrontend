import React, { useEffect, useState } from 'react';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes'); // Adjust the API endpoint as necessary
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">All Recipes</h1>
      <div className="row">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <div className="col-md-4" key={recipe.id}>
              <div className="card mb-4">
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">Rating: {recipe.rating}</p>
                  <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes available.</p>
        )}
      </div>
    </div>
  );
};

export default AllRecipes;
