import { pool } from "../../config/db";

const createTodo = async (
  user_id: number,
  title: string,
  description: string,
) => {
  return await pool.query(
    `
        INSERT INTO todos(user_id, title, description) VALUES ($1 ,$2, $3) RETURNING *
    `,
    [user_id, title, description],
  );
};
const getAllTodos = async (user_id: string) => {
  return await pool.query(
    `
    SELECT * FROM todos WHERE user_id=$1
    `,
    [user_id],
  );
};
const updateTodo = async (
  user_id: string,
  title: string,
  description: string,
) => {
  return await pool.query(
    `
    UPDATE todos SET title=$1, description=$2 WHERE user_id=$3 RETURNING *
    `,
    [title, description, user_id],
  );
};
export const todoServices = { createTodo, getAllTodos, updateTodo };
