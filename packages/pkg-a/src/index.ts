/**
 * Options for  {@link ClassA}
 */
export interface ClassAOptions {
    name: string;
    number: number;
}

/**
 * Class A
 */
export class ClassA {
    name: ClassAOptions['name'];
    number: ClassAOptions['number'];

    constructor(options: ClassAOptions) {
        this.name = options.name;
        this.number = options.number;
    }
}

