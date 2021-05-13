import "./App.css";
import React from "react";
import TaskList from "./components/TaskList";
import ItemDialog from "./components/ItemDialog";
import DeleteDialog from "./components/DeleteDialog";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [search, setSearch] = React.useState("");
  const [openAddDialog, setOpenAddDialog] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [task, setTask] = React.useState({});

  const saveData = (data) => {
    setTasks(data);
    setTask({});
    localStorage.setItem("data", JSON.stringify(data));
  };

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };
  const handleAddTask = (newTask) => {
    const newTasks = [...tasks, newTask];
    setOpenAddDialog(false);
    saveData(newTasks);
  };

  const handleOpenEditDialog = (id) => {
    setTask(tasks.find((item) => item.id === id));
    setOpenAddDialog(true);
  };
  const handleEditTask = (editTask) => {
    const newTasks = tasks.map((item) => {
      if (item.id !== task.id) return item;
      else return editTask;
    });
    saveData(newTasks);
    setOpenAddDialog(false);
  };

  const handleOpenDeleteDialog = (id) => {
    setTask(tasks.find((item) => item.id === id));
    setOpenDeleteDialog(true);
  };
  const handleDeleteTask = () => {
    const newTasks = tasks.filter((item) => item.id !== task.id);
    setOpenDeleteDialog(false);
    saveData(newTasks);
  };

  const handleClose = () => {
    setOpenAddDialog(false);
    setTask({});
  };

  return (
    <div className="App">
      <Header
        handleOpenDialog={handleOpenAddDialog}
        handleSearchChange={(search) => setSearch(search)}
      />
      <TaskList
        tasks={tasks}
        search={search}
        handleOpenDeleteDialog={handleOpenDeleteDialog}
        handleOpenEditDialog={handleOpenEditDialog}
      />
      <ItemDialog
        open={openAddDialog}
        task={task}
        handleAddTask={handleAddTask}
        handleEditTask={handleEditTask}
        handleClose={handleClose}
      />
      <DeleteDialog
        open={openDeleteDialog}
        task={task}
        handleDeleteTask={handleDeleteTask}
        handleClose={() => setOpenDeleteDialog(false)}
      />
    </div>
  );
}

export default App;
