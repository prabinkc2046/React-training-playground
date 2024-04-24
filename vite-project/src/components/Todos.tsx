import { useTodoIds, useTodos } from "../service/queries";
import { useCreateTodo } from "../service/mutation";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Todo } from "../types/todo";
export default function Todos() {
	const todosIdsQuery = useTodoIds();
	const todosQueries = useTodos(todosIdsQuery.data);
	
	const createTodoMutation = useCreateTodo();
	
	if (todosIdsQuery.isPending) {
		return <span>Loading ...</span>
	};


	if (todosIdsQuery.isError) {
		return <span> There is error</span>
	};

	const { register, handleSubmit } = useForm<Todo>();

	const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
		createTodoMutation.mutate(data);
	  };

	return (
	<>
		{/* {todosIdsQuery.data?.map((id) => (
			<div key={id}> ID: {id}</div>
		))} */}

	<form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h4>New todo:</h4>
        <input placeholder="Title" {...register("title")} />
        <br />
        <input placeholder="Description" {...register("description")} />
        <br />
        <input
          type="submit"
          disabled={createTodoMutation.isPending}
          value={createTodoMutation.isPending ? "Creating..." : "Create todo"}
        />
      </form>

		<ul>
			{todosQueries.map(({data}) => (
				<li key={data?.id}>
					<div>Id: {data?.id}</div>
					<span>
						<strong>Title:</strong> {data?.title}, {" "}
						<strong>Description:</strong> {data?.description}
					</span>
				</li>
			))}
		</ul>
	</>
	);
};
