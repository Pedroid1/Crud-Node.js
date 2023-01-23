const connection = require("./connection");

const getAll = async () => {
	const [tasks] = await connection.execute("SELECT * FROM tasks");
	return tasks;
};

const createTask = async (task) => {
	const { title } = task;
	const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";
	const date = new Date(Date.now()).toLocaleString();
	const [createdTask] = await connection.execute(query, [title, "Pendente", date]);
	return {insertId: createdTask.insertId};
};

const deleteTask = async (taskId) => {
	const removedTask = await connection.execute("DELETE FROM tasks WHERE id = ?", [taskId]);
	return removedTask;
};

const updateTask = async (taskId, task) => {
	const { title, status } = task;
	const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
	const updatedTask = await connection.execute(query, [title, status, taskId]);
	return updatedTask;
};

module.exports = {
	getAll,
	createTask,
	deleteTask,
	updateTask
};