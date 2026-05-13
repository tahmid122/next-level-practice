import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await userServices.createUser(name, email);

    return res.status(201).json({
      success: true,
      message: "User successfully created",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const userControllers = { createUser };
