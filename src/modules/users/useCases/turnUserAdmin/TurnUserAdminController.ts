import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {
    console.log(".");
  }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const result = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
