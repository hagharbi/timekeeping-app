export const findById = (id, list) => list.find(item => item.id === id);
export const updateItem = todo => ({ ...todo, isComplete: !todo.isComplete });
export const updatedItem = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ];
};
