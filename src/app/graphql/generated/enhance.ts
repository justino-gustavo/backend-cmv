import * as tslib from 'tslib';
import { ClassType } from 'type-graphql';
import * as models from './models';
import * as argsTypes from './resolvers/crud/args.index';
import * as actionResolvers from './resolvers/crud/resolvers-actions.index';
import * as crudResolvers from './resolvers/crud/resolvers-crud.index';
import * as inputTypes from './resolvers/inputs';
import * as outputTypes from './resolvers/outputs';
import * as relationResolvers from './resolvers/relations/resolvers.index';

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Product: crudResolvers.ProductCrudResolver,
  Customer: crudResolvers.CustomerCrudResolver,
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver,
  },
  Product: {
    aggregateProduct: actionResolvers.AggregateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    createOneProduct: actionResolvers.CreateOneProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    deleteOneProduct: actionResolvers.DeleteOneProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    findFirstProductOrThrow: actionResolvers.FindFirstProductOrThrowResolver,
    products: actionResolvers.FindManyProductResolver,
    product: actionResolvers.FindUniqueProductResolver,
    getProduct: actionResolvers.FindUniqueProductOrThrowResolver,
    groupByProduct: actionResolvers.GroupByProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    updateOneProduct: actionResolvers.UpdateOneProductResolver,
    upsertOneProduct: actionResolvers.UpsertOneProductResolver,
  },
  Customer: {
    aggregateCustomer: actionResolvers.AggregateCustomerResolver,
    createManyCustomer: actionResolvers.CreateManyCustomerResolver,
    createOneCustomer: actionResolvers.CreateOneCustomerResolver,
    deleteManyCustomer: actionResolvers.DeleteManyCustomerResolver,
    deleteOneCustomer: actionResolvers.DeleteOneCustomerResolver,
    findFirstCustomer: actionResolvers.FindFirstCustomerResolver,
    findFirstCustomerOrThrow: actionResolvers.FindFirstCustomerOrThrowResolver,
    customers: actionResolvers.FindManyCustomerResolver,
    customer: actionResolvers.FindUniqueCustomerResolver,
    getCustomer: actionResolvers.FindUniqueCustomerOrThrowResolver,
    groupByCustomer: actionResolvers.GroupByCustomerResolver,
    updateManyCustomer: actionResolvers.UpdateManyCustomerResolver,
    updateOneCustomer: actionResolvers.UpdateOneCustomerResolver,
    upsertOneCustomer: actionResolvers.UpsertOneCustomerResolver,
  },
};
const crudResolversInfo = {
  User: [
    'aggregateUser',
    'createManyUser',
    'createOneUser',
    'deleteManyUser',
    'deleteOneUser',
    'findFirstUser',
    'findFirstUserOrThrow',
    'users',
    'user',
    'getUser',
    'groupByUser',
    'updateManyUser',
    'updateOneUser',
    'upsertOneUser',
  ],
  Product: [
    'aggregateProduct',
    'createManyProduct',
    'createOneProduct',
    'deleteManyProduct',
    'deleteOneProduct',
    'findFirstProduct',
    'findFirstProductOrThrow',
    'products',
    'product',
    'getProduct',
    'groupByProduct',
    'updateManyProduct',
    'updateOneProduct',
    'upsertOneProduct',
  ],
  Customer: [
    'aggregateCustomer',
    'createManyCustomer',
    'createOneCustomer',
    'deleteManyCustomer',
    'deleteOneCustomer',
    'findFirstCustomer',
    'findFirstCustomerOrThrow',
    'customers',
    'customer',
    'getCustomer',
    'groupByCustomer',
    'updateManyCustomer',
    'updateOneCustomer',
    'upsertOneCustomer',
  ],
};
const argsInfo = {
  AggregateUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyUserArgs: ['data', 'skipDuplicates'],
  CreateOneUserArgs: ['data'],
  DeleteManyUserArgs: ['where'],
  DeleteOneUserArgs: ['where'],
  FindFirstUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstUserOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueUserArgs: ['where'],
  FindUniqueUserOrThrowArgs: ['where'],
  GroupByUserArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyUserArgs: ['data', 'where'],
  UpdateOneUserArgs: ['data', 'where'],
  UpsertOneUserArgs: ['where', 'create', 'update'],
  AggregateProductArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyProductArgs: ['data', 'skipDuplicates'],
  CreateOneProductArgs: ['data'],
  DeleteManyProductArgs: ['where'],
  DeleteOneProductArgs: ['where'],
  FindFirstProductArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstProductOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyProductArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueProductArgs: ['where'],
  FindUniqueProductOrThrowArgs: ['where'],
  GroupByProductArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyProductArgs: ['data', 'where'],
  UpdateOneProductArgs: ['data', 'where'],
  UpsertOneProductArgs: ['where', 'create', 'update'],
  AggregateCustomerArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyCustomerArgs: ['data', 'skipDuplicates'],
  CreateOneCustomerArgs: ['data'],
  DeleteManyCustomerArgs: ['where'],
  DeleteOneCustomerArgs: ['where'],
  FindFirstCustomerArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstCustomerOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyCustomerArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueCustomerArgs: ['where'],
  FindUniqueCustomerOrThrowArgs: ['where'],
  GroupByCustomerArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyCustomerArgs: ['data', 'where'],
  UpdateOneCustomerArgs: ['data', 'where'],
  UpsertOneCustomerArgs: ['where', 'create', 'update'],
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<TModel extends ResolverModelNames> =
  keyof (typeof crudResolversMap)[TModel]['prototype'];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<
  Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>
> & {
  _all?: MethodDecorator[];
  _query?: MethodDecorator[];
  _mutation?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(resolversEnhanceMap: ResolversEnhanceMap) {
  const mutationOperationPrefixes = [
    'createOne',
    'createMany',
    'deleteOne',
    'updateOne',
    'deleteMany',
    'updateMany',
    'upsertOne',
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix =>
        resolverActionName.startsWith(prefix)
      );
      const operationKindDecorators = isWriteOperation
        ? resolverActionsConfig._mutation
        : resolverActionsConfig._query;
      const mainDecorators = [...(allActionsDecorators ?? []), ...(operationKindDecorators ?? [])];
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === 'function') {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...(maybeDecoratorsOrFn ?? [])];
      }
      const actionTarget = (
        actionResolversConfig[resolverActionName as keyof typeof actionResolversConfig] as Function
      ).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof (typeof argsTypes)[TArgsType]['prototype'],
  number | symbol
>;

type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(argsTypesEnhanceMap: ArgsTypesEnhanceMap) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo]
    );
  }
}

const relationResolversMap = {
  Product: relationResolvers.ProductRelationsResolver,
};
const relationResolversInfo = {
  Product: ['uses', 'usedIn'],
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<TModel extends RelationResolverModelNames> =
  keyof (typeof relationResolversMap)[TModel]['prototype'];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames> = Partial<
  Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>
> & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames =
      relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === 'function') {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...(maybeDecoratorsOrFn ?? [])];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<TEnhanceConfig extends TypeConfig, TType extends object>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName] as
        | PropertyDecorator[]
        | PropertyDecoratorOverrideFn
        | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === 'function') {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...(maybeDecoratorsOrFn ?? [])];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ['id', 'createdAt', 'updatedAt', 'name', 'userName', 'email', 'phone', 'role'],
  Product: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  Customer: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof (typeof models)[TModel]['prototype'],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<ModelFieldNames<TModel>>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo]
    );
  }
}

const outputsInfo = {
  AggregateUser: ['_count', '_min', '_max'],
  UserGroupBy: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
    '_count',
    '_min',
    '_max',
  ],
  AggregateProduct: ['_count', '_min', '_max'],
  ProductGroupBy: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'userId',
    '_count',
    '_min',
    '_max',
  ],
  AggregateCustomer: ['_count', '_min', '_max'],
  CustomerGroupBy: [
    'id',
    'createdAt',
    'name',
    'email',
    'phone',
    'address',
    '_count',
    '_min',
    '_max',
  ],
  AffectedRowsOutput: ['count'],
  UserCountAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
    '_all',
  ],
  UserMinAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  UserMaxAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  ProductCount: ['uses', 'usedIn'],
  ProductCountAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'userId',
    '_all',
  ],
  ProductMinAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  ProductMaxAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  CustomerCountAggregate: ['id', 'createdAt', 'name', 'email', 'phone', 'address', '_all'],
  CustomerMinAggregate: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CustomerMaxAggregate: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CreateManyUserAndReturnOutputType: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  CreateManyProductAndReturnOutputType: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'userId',
  ],
  CreateManyCustomerAndReturnOutputType: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof (typeof outputTypes)[TOutput]['prototype'],
  number | symbol
>;

type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<
  OutputTypeFieldNames<TOutput>
>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(outputTypesEnhanceMap: OutputTypesEnhanceMap) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo]
    );
  }
}

const inputsInfo = {
  UserWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  UserOrderByWithRelationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  UserWhereUniqueInput: [
    'id',
    'userName',
    'email',
    'phone',
    'AND',
    'OR',
    'NOT',
    'createdAt',
    'updatedAt',
    'name',
    'password',
    'role',
  ],
  UserOrderByWithAggregationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
    '_count',
    '_max',
    '_min',
  ],
  UserScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  ProductWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'uses',
    'usedIn',
  ],
  ProductOrderByWithRelationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'uses',
    'usedIn',
  ],
  ProductWhereUniqueInput: [
    'id',
    'batch',
    'AND',
    'OR',
    'NOT',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'producedAt',
    'expiredAt',
    'uses',
    'usedIn',
  ],
  ProductOrderByWithAggregationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    '_count',
    '_max',
    '_min',
  ],
  ProductScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  CustomerWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CustomerOrderByWithRelationInput: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CustomerWhereUniqueInput: [
    'id',
    'email',
    'phone',
    'AND',
    'OR',
    'NOT',
    'createdAt',
    'name',
    'address',
  ],
  CustomerOrderByWithAggregationInput: [
    'id',
    'createdAt',
    'name',
    'email',
    'phone',
    'address',
    '_count',
    '_max',
    '_min',
  ],
  CustomerScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'name',
    'email',
    'phone',
    'address',
  ],
  UserCreateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  UserUpdateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  UserCreateManyInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  UserUpdateManyMutationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  ProductCreateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'uses',
    'usedIn',
  ],
  ProductUpdateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'uses',
    'usedIn',
  ],
  ProductCreateManyInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  ProductUpdateManyMutationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  CustomerCreateInput: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CustomerUpdateInput: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CustomerCreateManyInput: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CustomerUpdateManyMutationInput: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  StringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
  ],
  DateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  StringNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
  ],
  EnumRoleFilter: ['equals', 'in', 'notIn', 'not'],
  SortOrderInput: ['sort', 'nulls'],
  UserCountOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  UserMaxOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  UserMinOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'userName',
    'email',
    'phone',
    'password',
    'role',
  ],
  StringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  DateTimeWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  StringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  EnumRoleWithAggregatesFilter: ['equals', 'in', 'notIn', 'not', '_count', '_min', '_max'],
  ProductListRelationFilter: ['every', 'some', 'none'],
  ProductOrderByRelationAggregateInput: ['_count'],
  ProductCountOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  ProductMaxOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  ProductMinOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  CustomerCountOrderByAggregateInput: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CustomerMaxOrderByAggregateInput: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  CustomerMinOrderByAggregateInput: ['id', 'createdAt', 'name', 'email', 'phone', 'address'],
  StringFieldUpdateOperationsInput: ['set'],
  DateTimeFieldUpdateOperationsInput: ['set'],
  NullableStringFieldUpdateOperationsInput: ['set'],
  EnumRoleFieldUpdateOperationsInput: ['set'],
  ProductCreateNestedManyWithoutUsedInInput: ['create', 'connectOrCreate', 'connect'],
  ProductCreateNestedManyWithoutUsesInput: ['create', 'connectOrCreate', 'connect'],
  ProductUpdateManyWithoutUsedInNestedInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  ProductUpdateManyWithoutUsesNestedInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  NestedStringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedDateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedStringNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedEnumRoleFilter: ['equals', 'in', 'notIn', 'not'],
  NestedStringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedDateTimeWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedStringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntNullableFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedEnumRoleWithAggregatesFilter: ['equals', 'in', 'notIn', 'not', '_count', '_min', '_max'],
  ProductCreateWithoutUsedInInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'uses',
  ],
  ProductCreateOrConnectWithoutUsedInInput: ['where', 'create'],
  ProductCreateWithoutUsesInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'usedIn',
  ],
  ProductCreateOrConnectWithoutUsesInput: ['where', 'create'],
  ProductUpsertWithWhereUniqueWithoutUsedInInput: ['where', 'update', 'create'],
  ProductUpdateWithWhereUniqueWithoutUsedInInput: ['where', 'data'],
  ProductUpdateManyWithWhereWithoutUsedInInput: ['where', 'data'],
  ProductScalarWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
  ],
  ProductUpsertWithWhereUniqueWithoutUsesInput: ['where', 'update', 'create'],
  ProductUpdateWithWhereUniqueWithoutUsesInput: ['where', 'data'],
  ProductUpdateManyWithWhereWithoutUsesInput: ['where', 'data'],
  ProductUpdateWithoutUsedInInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'uses',
  ],
  ProductUpdateWithoutUsesInput: [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'batch',
    'producedAt',
    'expiredAt',
    'usedIn',
  ],
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof (typeof inputTypes)[TInput]['prototype'],
  number | symbol
>;

type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<
  InputTypeFieldNames<TInput>
>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(inputTypesEnhanceMap: InputTypesEnhanceMap) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo]
    );
  }
}
