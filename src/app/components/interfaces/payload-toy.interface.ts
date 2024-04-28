import { Toy } from "./toy.interface";

export type ToyPayload = Omit<Toy, 'id'>