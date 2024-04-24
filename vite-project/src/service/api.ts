import axios from "axios";
import {Todo} from "../types/todo";
import {createdTodo} from "./api";

const BASE_URL = "http://127.0.0.1:8080";

const axiosInstance = axios.create({baseURL: BASE_URL});


// async function that returns a id 
// returns promise
//throws error

export const getTodosIds = async () => {
	return (await axiosInstance.get<Todo []>("todos")).data.map((todo) => todo.id);
};

export const getTodo = async (id: number) => {
	return (await axiosInstance.get<Todo>(`todos/${id}`)).data;
}


export const createTodo = async (data: Todo) => {
	await axiosInstance.post("todos", data);
};
