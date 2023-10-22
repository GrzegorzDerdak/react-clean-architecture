export interface Repository<T, I = string, P = object> {
  /*
   * Add docs.
   */
  create?: (params: P) => Promise<T>;

  /*
   * Add docs.
   */
  get?: (id: I) => Promise<T | null>;

  /*
   * Add docs.
   */
  getAll: (params?: any) => Promise<T[] | null>;

  /*
   * Add docs.
   */
  update?: (id: I) => Promise<T>;

  /*
   * Add docs.
   */
  delete?: (id: I) => Promise<T>;
}
