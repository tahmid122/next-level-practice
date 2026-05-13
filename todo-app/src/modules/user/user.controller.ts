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
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUsers();
    return res.status(200).json({
      status: true,
      message: "Users retrieved successful",
      data: result.rows,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userServices.getSingleUser(id as string);
    if (result.rows.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Single user got successful",
        data: result.rows[0],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User not found",
        data: {},
      });
    }
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userServices.updateUser(
      id as string,
      req.body.name as string,
    );
    if (result.rows.length > 0) {
      return res.status(201).json({
        success: true,
        message: "User successfully updated",
        data: result.rows[0],
      });
    } else {
      return res
        .status(200)
        .json({ success: false, message: "User not updated", data: {} });
    }
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const userControllers = {
  createUser,
  getUsers,
  getSingleUser,
  updateUserById,
};
