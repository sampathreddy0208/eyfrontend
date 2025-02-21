import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import AddRecipe from '../components/AddRecipe';


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleAddRecipe = (newRecipe) => {
    const recipeWithId = {
      ...newRecipe,
      id: recipes.length + 1,
      author: 'Current User',
      rating: 0
    };
    setRecipes([...recipes, recipeWithId]);
  };


  useEffect(() => {
    // TODO: Fetch recipes from API
    const sampleRecipes = [
      {
        id: 1,
        title: 'Vegetable Stir Fry',
        image: '/ban.jpg',
        description: 'Healthy and delicious vegetable stir fry',
        author: 'Chef John',
        rating: 4.5
      },
      {
        id: 2,
        title: 'Classic Spaghetti',
        image: '/ban.jpg',
        description: 'Traditional Italian spaghetti recipe',
        author: 'Maria Rossi',
        rating: 4.8
      }
    ];
    setTimeout(() => {
      setRecipes(sampleRecipes);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <AddRecipe onAddRecipe={handleAddRecipe} />
      <div className="search-bar mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
              author={recipe.author}
              rating={recipe.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
