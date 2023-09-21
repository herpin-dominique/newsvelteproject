// database.ts

// Définissez l'interface SessionUser pour représenter les données de l'utilisateur
export interface SessionUser {
	id: string;
	username: string;
	email: string;
	loggedIn: boolean;
}

// Simulez une base de données pour stocker les tâches (todos)
const todosDatabase: Record<string, Todo[]> = {};

export interface Todo {
	id: string;
	description: string;
	completed: boolean;
	createdAt: Date;
}

// Initialisez la base de données des tâches pour un utilisateur donné
export function initUserTodos(userId: string): void {
	todosDatabase[userId] = [];
}

// Obtenez la liste des tâches d'un utilisateur donné
export function getTodos(userId: string): Todo[] | undefined {
	return todosDatabase[userId];
}

// Créez une nouvelle tâche pour un utilisateur donné
export function createTodo(userId: string, description: string): void {
	if (!todosDatabase[userId]) {
		todosDatabase[userId] = [];
	}

	const todo: Todo = {
		id: generateTodoId(), // Vous devez implémenter la génération d'identifiants uniques ici
		description,
		completed: false,
		createdAt: new Date()
	};

	todosDatabase[userId].push(todo);
}

// Générez un identifiant unique pour une tâche (vous devrez implémenter cette fonction)
function generateTodoId(): string {
	// Implémentez votre logique de génération d'identifiants uniques ici
	// Par exemple, vous pouvez utiliser un module UUID pour cela
	return 'todo-id-placeholder';
}
