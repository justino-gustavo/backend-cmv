// TokenService.d.ts
// responsability: Define the TokenService interface
// design pattern: Data Transfer Object

import type { Either } from '@core/errors/either';

export interface GenerateInput {
  data: {
    id: string;
    role: string;
    refreshToken?: string;
  };
  exp: number;
  iat: number;
  nbf?: number;
}

interface Service {
  generateToken(input: GenerateInput): Promise<Either<Error, string>>;
  validateToken(token: string): Promise<Either<Error, boolean>>;
  revokeToken(token: string): Promise<Either<Error, string>>;
}

export default Service;
