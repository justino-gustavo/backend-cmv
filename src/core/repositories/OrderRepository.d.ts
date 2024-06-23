// OrderRepository.d.ts
// responsability: Define the OrderRepository interface
// design pattern: Data Transfer Object

import type { Order } from '@core/domain/entities';
import type { Either } from '@core/errors/either';

interface Repository {
  createOrder(input: Order.Data): Promise<Either<Error, Order>>;
  getOrder(input: Order.UniqueKey): Promise<Either<Error, Order>>;
  updateOrder(input: Order.UniqueKey): Promise<Either<Error, Order>>;
  deleteOrder(input: Order.UniqueKey): Promise<Either<Error, Order>>;
}

export default Repository;
