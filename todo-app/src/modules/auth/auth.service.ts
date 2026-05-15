import { pool } from "../../config/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../../config";
const loginUser = async (payload: Record<string, unknown>) => {
  const { email, password } = payload;

  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  if (result.rows.length === 0) {
    return null;
  }

  const user = result.rows[0];
  const match = await bcrypt.compare(password as string, user.password);

  if (!match) {
    return false;
  }
  const token = jwt.sign(
    { name: user.name, email: user.email },
    config.jwt_secret as string,
    { expiresIn: "7d" },
  );

  return { user, token };
};

export const authServices = { loginUser };
