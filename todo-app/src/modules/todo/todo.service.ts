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
  todo_id: string,
  user_id: string,
  title: string,
  description: string,
) => {
  return await pool.query(
    `
    UPDATE todos SET title=$1, description=$2 WHERE user_id=$3 AND id=$4 RETURNING *
    `,
    [title, description, user_id, todo_id],
  );
};
const deleteTodo = async (user_id: string, todo_id: string) => {
  return await pool.query(
    `
    DELETE FROM todos WHERE user_id=$1 AND id=$2 RETURNING *
    `,
    [user_id, todo_id],
  );
};
const toggleStatus = async (user_id: string, todo_id: string) => {
  return await pool.query(
    `
    UPDATE todos SET iscompleted= NOT iscompleted WHERE user_id=$1 AND id=$2 RETURNING *
    `,
    [user_id, todo_id],
  );
};
export const todoServices = {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  toggleStatus,
};
