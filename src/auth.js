export const isAutenticado = () =>
  localStorage.getItem("token") ? true : false;
