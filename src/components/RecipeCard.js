import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card mb-4">
      <img src={recipe.image} className="card-img-top" alt={recipe.title} />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">Rating: {recipe.rating}</p>
        <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
