import express, { Request, Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 5000;
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(process.cwd(), ".env") });

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection Postgres
const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STR}`,
});

const initDB = async () => {
  //USERS TABLE
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      age INT,
      phone VARCHAR(15),
      address TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
    `);

  //TODOS TABLE
  await pool.query(`
      CREATE TABLE IF NOT EXISTS todos(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(200) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT false,
      due_date DATE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW() 
      )
    `);
};

initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers");
});

// create users
app.post("/users", async (req: Request, res: Response) => {
  const { name, age, email, phone, address } = req.body;
  try {
    const result = await pool.query(
      `
      INSERT INTO users (name, age, email, phone, address)
      VALUES ($1, $2, $3, $4, $5)  RETURNING *`,
      [name, age, email, phone, address],
    );
    return res.status(201).json({
      success: false,
      message: "Data inserted successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

//get all users
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error?.message });
  }
});

//get single user
app.get("/users/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      `
        SELECT * FROM users WHERE id=$1
      `,
      [userId],
    );
    return res.status(200).json({
      success: true,
      message: result.rowCount ? "Get single user successful" : "NO user found",
      data: result.rows[0] || {},
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
