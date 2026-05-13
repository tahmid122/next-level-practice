import { pool } from "../../config/db";

const createUser = async (name: string, email: string) => {
  return await pool.query(
    `
        INSERT INTO users(name, email) VALUES ($1, $2) RETURNING *
        `,
    [name, email],
  );
};

const getUsers = async () => {
  return await pool.query(`
        SELECT * FROM users
        `);
};

const getSingleUser = async (id: string) => {
  return await pool.query(
    `
     SELECT * FROM users WHERE id=$1
    `,
    [id],
  );
};

const updateUser = async (id: string, name: string) => {
  return await pool.query(
    `
     UPDATE users SET name=$1 WHERE id=$2 RETURNING *
    `,
    [name, id],
  );
};

const deleteUser = async (id: string) => {
  return await pool.query(
    `
        DELETE FROM users WHERE id=$1 RETURNING *
        `,
    [id],
  );
};
export const userServices = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
