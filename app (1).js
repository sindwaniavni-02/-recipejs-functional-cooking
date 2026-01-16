// ---------- Recipe Data ----------
const recipes = [
  {
    id: 1,
    title: "Garlic Butter Pasta",
    time: 25,
    difficulty: "easy",
    description: "A quick and comforting pasta tossed in rich garlic butter.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    time: 20,
    difficulty: "easy",
    description: "Colorful vegetables sautéed with light soy and sesame oil.",
    category: "salad"
  },
  {
    id: 3,
    title: "Chicken Curry",
    time: 60,
    difficulty: "medium",
    description: "Classic Indian-style chicken curry with aromatic spices.",
    category: "curry"
  },
  {
    id: 4,
    title: "Mushroom Risotto",
    time: 45,
    difficulty: "medium",
    description: "Creamy risotto cooked slowly with mushrooms and parmesan.",
    category: "rice"
  },
  {
    id: 5,
    title: "Beef Wellington",
    time: 90,
    difficulty: "hard",
    description: "Tender beef wrapped in pastry with mushrooms and herbs.",
    category: "meat"
  },
  {
    id: 6,
    title: "Ramen From Scratch",
    time: 120,
    difficulty: "hard",
    description: "Homemade ramen with rich broth and fresh toppings.",
    category: "noodles"
  },
  {
    id: 7,
    title: "Greek Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh tomatoes, cucumbers, olives, and feta cheese.",
    category: "salad"
  },
  {
    id: 8,
    title: "Paneer Butter Masala",
    time: 50,
    difficulty: "medium",
    description: "Creamy tomato-based curry with soft paneer cubes.",
    category: "curry"
  }
];

// ---------- DOM Selection ----------
const recipeContainer = document.querySelector("#recipe-container");

// ---------- Create Recipe Card ----------
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

// ---------- Render Recipes ----------
const renderRecipes = (recipesArray) => {
  const recipesHTML = recipesArray
    .map(recipe => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = recipesHTML;
};

// ---------- Initialize App ----------
renderRecipes(recipes);
