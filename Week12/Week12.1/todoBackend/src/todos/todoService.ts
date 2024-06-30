import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description" >;


export class TodoService {
    public get(todoId: string) : Todo{
        return {
            id : todoId,
            title : "mocked todo",
            description : "Mocked Desc";
            done:false;
        }
    }
    public create(TodoCreationParams : TodoCreationParams) : Todo {
        console.log("Mocked todo call");
        return {
            id : todoId,
            title : "mocked todo",
            description : "Mocked Desc";
            done:false
        }
    }
}