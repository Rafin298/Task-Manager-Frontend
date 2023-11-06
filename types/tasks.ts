import { ObjectId } from "mongodb";
export interface ITask {
  _id: string,
  text: string
}
export interface ITaskPost {
  text: string
}