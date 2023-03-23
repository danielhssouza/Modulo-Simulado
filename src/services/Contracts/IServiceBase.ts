export default interface IServiceBase<T> {
  /**
   * Add
   */
  Add: (item: T) => Promise<T>
}
