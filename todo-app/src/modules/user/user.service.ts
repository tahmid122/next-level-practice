import { pool } from "../../config/db";

const createUser = async (name: string, email: string) => {
  return await pool.query(
    `
        INSERT INTO users(name, email) VALUES ($1, $2) RETURNING *
        `,
    [name, email],
  );
};

export const userServices = { createUser };
