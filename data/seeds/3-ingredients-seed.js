/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredients").insert([
    { ingredient_name: "olive oil", quantity: 4, recipe_id: 1, step_id: 2 }, 
    { ingredient_name: "water", quantity: 1, recipe_id: 1, step_id: 1 },
    { ingredient_name: "water", quantity: 0.014, recipe_id: 1, step_id: 3 },
    { ingredient_name: "olive oil", quantity: 3, recipe_id: 1, step_id: 1 },
  ]);
};

// {
//   "recipe_id" : 1,
//   "recipe_name": "Spaghetti Bolognese",
//   "created_at": "2021-01-01 08:23:19.120",
//   "steps": [
//     {
//       "step_id": 11,
//       "step_number": 1,
//       "step_instructions": "Put a large saucepan on a medium heat",
//       "ingredients": [

//       ]
//     },
//     {
//       "step_id": 12,
//       "step_number": 2,
//       "step_instructions": "Add 1 tbsp olive oil",
//       "ingredients": [
//         { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//       ]
//     },
//   ]
// }
