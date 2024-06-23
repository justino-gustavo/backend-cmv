export type Either<F, S> = Left<F> | Right<S>;

class Left<F> {
  readonly isLeft = true;
  readonly isRight = false;
  constructor(readonly value: F) {}
}

class Right<S> {
  readonly isLeft = false;
  readonly isRight = true;
  constructor(readonly value: S) {}
}

/**
 * Cria uma instância de Left.
 * @param e O valor do erro.
 * @returns Uma instância de Left contendo o valor do erro.
 */
export const left = <F, S>(f: F): Either<F, S> => new Left(f);

/**
 * Cria uma instância de Right.
 * @param a O valor do sucesso.
 * @returns Uma instância de Right contendo o valor do sucesso.
 */
export const right = <F, S>(s: S): Either<F, S> => new Right(s);
