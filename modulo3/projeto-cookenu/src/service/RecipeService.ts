import { knex } from '../config/connection';
import { v4 as uuid } from 'uuid';
import { jwtVerify } from '../utils/jwtUtil';
import Recipe from '../model/Recipe';

export default class RecipeService {
  async create(recipe: Recipe, token: string) {
    try {
      jwtVerify(token);
    } catch (error: any) {
      return { code: 401, result: error.message };
    }
    recipe.id = uuid();
    recipe.createdAt = new Date();
    return await knex('Recipes')
      .insert(recipe)
      .then(() => {
        return {
          code: 201,
          result: recipe,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  async getById(id: string, token: string) {
    try {
      jwtVerify(token);
    } catch (error: any) {
      return { code: 401, result: error.message };
    }
    return await knex('Recipes')
      .where('id', id)
      .then((result: Array<Recipe>) => {
        const [recipe] = result;
        if (!recipe) throw new Error('A Receita não existe.');
        return {
          code: 200,
          result: {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createAt: recipe.createdAt.toLocaleDateString('br'),
          },
        };
      })
      .catch((error) => {
        return { code: 404, result: error.message };
      });
  }
}
