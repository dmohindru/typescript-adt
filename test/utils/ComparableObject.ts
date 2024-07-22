import {Comparable} from "../../src/interfaces/Comparable";

export class ComparableObject implements Comparable<ComparableObject>{
    constructor(private name: string, private age: number) {}

    get value(): string {
        return `Name: ${this.name}, Age: ${this.age};`
    }

    compareTo(other: ComparableObject): number {
        if (this.name > other.name && this.age > other.age) {
            return 1;
        } else if (this.name === other.name && this.age === other.age) {
            return 0;
        } else {
            return -1
        }
    }
}