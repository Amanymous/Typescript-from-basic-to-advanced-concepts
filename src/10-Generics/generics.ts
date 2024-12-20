/**
 ** Generic Types
 ** Generic types in TypeScript allow you to write objects, functions and classes
 ** that work with multiple data types, instead of being limited to a single data type.
 ** A generic type is defined using angle brackets <T> and can be used as a placeholder
 ** for a specific data type. The actual data type is specified when the function or class is used.
 */

// function identity<T>(arg: T): T{
// 	return arg
// }

// console.log(identity('sa'));

// function identity<T>(arg: T[]): T[]{
// 	return arg
// }

// console.log(identity(['sa']));

// function identity<T>(arg: Array<T>): Array<T>{
// 	return arg
// }

// console.log(identity(['sa']));

// let myIdentity: <Type>(arg: Type) => Type = identity;
// console.log(myIdentity('hjnj'));

// interface GenericIdentityFn<Type>  {
// 	(arg: Type): Type
// }
// let identity = <Type>(arg: Type): Type=>{
// 	return arg
// }
// const numberIdentity = identity<number>(5); // numberIdentity is of type 'number'
// const stringIdentity = identity("Hello, TypeScript!"); // stringIdentity is of type 'string'
// const booleanIdentity = identity(true); // booleanIdentity is of type 'boolean'

// console.log(numberIdentity);  // Output: 5
// console.log(stringIdentity);  // Output: "Hello, TypeScript!"
// console.log(booleanIdentity); // Output: true

// interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
// }

// // Example usage
// const identity: GenericIdentityFn = <Type>(arg: Type): Type => arg;
// const numberIdentity = identity(5);  // TypeScript infers 'number' for the argument and return type
// const stringIdentity = identity("Hello");  // TypeScript infers 'string' for the argument and return type
// console.log({numberIdentity,stringIdentity});

/**
 ** Generic Classes
 ** A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter
 ** list in angle brackets (<>) following the name of the class.
 */

//  class GenericNumber<NumType> {
//   zeroValue: NumType;
//   add: (x: NumType, y: NumType) => NumType;

//   constructor(zeroValue: NumType, add: (x: NumType, y: NumType) => NumType) {
//     this.zeroValue = zeroValue;
//     this.add = add;
//   }
// }

// let stringNumeric = new GenericNumber<number>(0, (x, y) => x + y);

// console.log(stringNumeric.add(2, 1));

// interface LengthWise{
// 	length: number;
// 	breath: number
// }

// function loggingIdentity<Type extends LengthWise>(arg: Type): Type{
// 	console.log(arg.length,arg.breath);
// 	return arg

// }

// console.log(loggingIdentity({length:1,breath:2,arg:2}));

// function getProperty<Type, Key extends keyof Type>(obj: Type, key:Key){
// 	return obj[key]
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// console.log(getProperty(x,"a"));

// function create<Type>(c:{new ():Type}):Type{
// 	return new c()
// }
// class Person {
//   name: string;
//   constructor() {
//     this.name = "John Doe";
//   }
// }

// const personInstance = create(Person);
// console.log(create(Person));

// class BeeKeeper{
// 	hasMask:boolean = true
// }

// class ZooKeeper{
// 	nameTag: string = "Mike"
// }

// class Animal{
// 	numLegs: number = 4
// }

// class Bee extends Animal{
// 	numLegs = 6
// 	keeper: BeeKeeper = new BeeKeeper()
// }

// class Lion extends Animal{
// 	keeper: ZooKeeper = new ZooKeeper()
// }

// function createInstance<A extends Animal>(c: new ()=> A):A{
// 	return new c()
// }

// console.log(createInstance(Lion).keeper.nameTag);
// console.log(createInstance(Bee).keeper.hasMask);

// Define the Producer interface
// interface Producer<T> {
//   make(): T;
// }

// // Example of a class implementing Producer interface
// class StringProducer implements Producer<string> {
//   make(): string {
//     return "Hello, World!";
//   }
// }

// // A function that takes a Producer and calls its `make` method
// function useProducer<T>(producer: Producer<T>): T {
//   return producer.make();
// }

// // Create an instance of StringProducer
// const stringProducer = new StringProducer();

// // Call the function with the producer instance
// const result = useProducer(stringProducer);

// console.log(result); // Outputs: Hello, World!

// interface Producer<T> {
//   make(): T;
// }
// function app<T>(prod: Producer<T>): T {
//   return prod.make();
// }

// let producer: Producer<string> = {
//   make: () => "hi",
// };

// let test = app(producer);
// console.log({ test });

// interface Consumer<T> {
//   consume: (arg: T) => T; // consume must return the same type it receives
// }

// // Function that uses the Consumer interface as a parameter
// function processItem<T>(consumer: Consumer<T>, item: T): T {
//   return consumer.consume(item);
// }

// // Example consumer
// const stringConsumer: Consumer<string> = {
//   consume: (arg: string) => {
//     console.log("Consuming string:", arg);
//     return arg; // Must return the same type (string)
//   },
// };

// const numberConsumer: Consumer<number> = {
//   consume: (arg: number) => {
//     console.log("Consuming number:", arg);
//     return arg; // Must return the same type (number)
//   },
// };

// // Using the function with the consumers
// const stringResult = processItem(stringConsumer, "Hello, World!"); // Consuming string: Hello, World!
// const numberResult = processItem(numberConsumer, 42); // Consuming number: 42

// console.log("Processed string result:", stringResult); // Processed string result: Hello, World!
// console.log("Processed number result:", numberResult); // Processed number result: 42

// interface Consumer<in T> {
//   consume: (arg: T) => void;
// }
// function app<T>(consume: Consumer<T>, item: T) {
//   console.log(consume.consume(item));
// }

// let consumeNumber: Consumer<number> = {
//   consume: (arg: number) => console.log(arg),
// };
// const numberResult = app(consumeNumber, 42);
// console.log({ numberResult });
