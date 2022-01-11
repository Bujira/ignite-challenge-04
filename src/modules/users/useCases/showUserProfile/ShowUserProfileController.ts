import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {
    console.log(".");
  }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const result = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
