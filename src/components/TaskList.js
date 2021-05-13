import React from "react";
import Item from "./Item";

function TaskList({
  tasks,
  search,
  handleOpenDeleteDialog,
  handleOpenEditDialog,
}) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const filterTasks = tasks.filter((item) => item.title.includes(search));
    setItems(filterTasks);
  }, [search, tasks]);

  return (
    <>
      {tasks.length === 0 ? (
        <h4>There is no task! Create One</h4>
      ) : items.length === 0 ? (
        <h4>Not found</h4>
      ) : (
        items.map((item) => (
          <Item
            title={item.title}
            description={item.description}
            key={item.id}
            handleDeleteTask={() => handleOpenDeleteDialog(item.id)}
            handleEditTask={() => handleOpenEditDialog(item.id)}
          />
        ))
      )}
    </>
  );
}

export default TaskList;
