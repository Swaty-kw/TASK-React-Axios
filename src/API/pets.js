import instance from ".";
const getAllPets = async () => {
  const response = await instance.get("/pets/");
  console.log(response.data);
  return response.data;
};

const getPetId = async (id) => {
  const response = await instance.get(`pets/${id}`);
  console.log(response.data);
  return response.data;
};
export { getPetId, getAllPets };
