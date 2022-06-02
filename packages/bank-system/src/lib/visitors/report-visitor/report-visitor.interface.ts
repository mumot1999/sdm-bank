
export interface Element {
  accept(v: Visitor<any>): void;
}

export interface Visitor<T> {
  visit: (e: T) => void;
}