import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { AuthenticateUserService } from '@modules/users/services/AuthenticateUserService';

export class CreateSessionController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const token = await authenticateUser.execute(
      email,
      password,
    );

    return response.json(token);
  }
}
