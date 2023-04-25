export const addUser = (user) => {
  return {
    type: "ADD_USER",
    data: user,
  };
};
export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    userId: id,
  };
};
