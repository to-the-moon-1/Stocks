const getDragDropItems = (items, { destination, source }) => {
  if (!destination) return null;
  const [reorderedItem] = items.splice(source.index, 1);
  items.splice(destination.index, 0, reorderedItem);
  return items;
};

export default getDragDropItems;
