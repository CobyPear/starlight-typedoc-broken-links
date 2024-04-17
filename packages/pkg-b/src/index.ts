import { ClassA, type ClassAOptions } from "pkg-a";

/**
 * Extends ClassA
 * {@link ClassAOptions} is a type from {@link ClassA}
 * 
 * @see {@link ClassA}
 * @see {@link ClassAOptions}
 * 
 */
export class ClassB extends ClassA {
  boolean: boolean;

  constructor(options: ClassAOptions, boolean: boolean) {
    super(options);
    this.number = options.number + 1;
    this.boolean = boolean;
  }
}
