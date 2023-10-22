import {
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { SALEOR_GRAPHQL_URL } from "@/config";

const isServerSide = typeof window === "undefined";

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssr = ssrExchange({
  isClient: !isServerSide,
  // initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
});

const makeClient = () => {
  return createClient({
    url: SALEOR_GRAPHQL_URL ?? "https://localhost:8080/graphql/",
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

export { getClient };
