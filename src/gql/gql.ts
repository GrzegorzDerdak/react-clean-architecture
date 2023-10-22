/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment BaseProduct on Product {\n  id\n  slug\n  name\n  created\n  description\n  thumbnail {\n    ...Image\n  }\n}": types.BaseProductFragmentDoc,
    "fragment Image on Image {\n  url\n  alt\n}": types.ImageFragmentDoc,
    "query Products($first: Int = 10, $channel: String, $search: String, $filter: ProductFilterInput, $sortBy: ProductOrder, $where: ProductWhereInput) {\n  products(\n    first: $first\n    channel: $channel\n    sortBy: $sortBy\n    search: $search\n    filter: $filter\n    where: $where\n  ) {\n    edges {\n      node {\n        ...BaseProduct\n      }\n    }\n  }\n}": types.ProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment BaseProduct on Product {\n  id\n  slug\n  name\n  created\n  description\n  thumbnail {\n    ...Image\n  }\n}"): (typeof documents)["fragment BaseProduct on Product {\n  id\n  slug\n  name\n  created\n  description\n  thumbnail {\n    ...Image\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Image on Image {\n  url\n  alt\n}"): (typeof documents)["fragment Image on Image {\n  url\n  alt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Products($first: Int = 10, $channel: String, $search: String, $filter: ProductFilterInput, $sortBy: ProductOrder, $where: ProductWhereInput) {\n  products(\n    first: $first\n    channel: $channel\n    sortBy: $sortBy\n    search: $search\n    filter: $filter\n    where: $where\n  ) {\n    edges {\n      node {\n        ...BaseProduct\n      }\n    }\n  }\n}"): (typeof documents)["query Products($first: Int = 10, $channel: String, $search: String, $filter: ProductFilterInput, $sortBy: ProductOrder, $where: ProductWhereInput) {\n  products(\n    first: $first\n    channel: $channel\n    sortBy: $sortBy\n    search: $search\n    filter: $filter\n    where: $where\n  ) {\n    edges {\n      node {\n        ...BaseProduct\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;