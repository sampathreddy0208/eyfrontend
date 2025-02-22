import React from 'react';

const Profile = () => {
  // Placeholder for user data
  const user = {
    name: localStorage.getItem("username"),
    recipes: [
      { id: 1, title: 'Pancakes' },
      { id: 2, title: 'Spaghetti Bolognese' },
      { id: 3, title: 'Chocolate Cake' }
    ]
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Profile</h1>
      <h2 className="text-center">Welcome, {user.name}!</h2>
      <h3>Your Recipes:</h3>
      <ul>
        {user.recipes.length > 0 ? (
          user.recipes.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))
        ) : (
          <li>No recipes added yet.</li>
        )}
      </ul>
    </div>
  );
};

export default Profile;
