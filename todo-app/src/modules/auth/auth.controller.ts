import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authServices.loginUser(req.body);
    if (result !== null && result !== false) {
      return res.status(200).json({
        success: true,
        message: "User login successful",
        data: result,
      });
    }
    if (result === null) {
      return res.status(200).json({
        success: true,
        message: "User not found",
        data: {},
      });
    }
    if (result === false) {
      return res.status(200).json({
        success: true,
        message: "Password not matched",
        data: {},
      });
    }
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const authControllers = { loginUser };
