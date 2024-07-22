export class NotComparableObject {
  constructor(
    private name: string,
    private age: number
  ) {}

  get value(): string {
    return `Name: ${this.name}, Age: ${this.age};`;
  }
}
