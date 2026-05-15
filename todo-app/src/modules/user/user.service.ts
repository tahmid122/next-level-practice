import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

const createUser = async (payload: Record<string, unknown>) => {
  const { name, email, password } = payload;
  const hashPassword = await bcrypt.hash(password as string, 10);
  return await pool.query(
    `
        INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *
        `,
    [name, email, hashPassword],
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
