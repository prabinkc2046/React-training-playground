import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { createTodo } from "./api";

export function useCreateTodo() {
	const queryClient = useQueryClient();
	return useMutation ({
		mutationFn: (data: Todo) => createTodo(data),
		onMutate: () => {
			console.log("mutate");
		}, 
		onError: () => {
			console.log("Error");
		},

		OnSuccess : () => {
			console.log("success");
		},
		Onsettled: async (_, error) => {
			console.log("Settled");
			if(error) {
				console.log(error);
			} else {
				await queryClient.invalidateQueries({queryKey: ["todso"]});
			}
		}
	});
};