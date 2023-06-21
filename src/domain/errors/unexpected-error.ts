export class UnexpectedError extends Error {
  constructor () {
    super('Unexpected error, try again later')
    this.name = 'UnexpectedError'
  }
}
