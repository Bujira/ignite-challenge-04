import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {
    console.log(".");
  }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const result = this.listAllUsersUseCase.execute({
        user_id: user_id as string,
      });

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
