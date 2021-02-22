export default interface IHashProvider {
  generateStringRandomSize(min: number, max: number): Promise<string>
}
