import instance from ".";

const getAllPets = async () => {
  const response = await instance.get("/pets/");
  console.log(response.data);
  return response.data;
};

const getOnePet = async (id) => {
  const response = await instance.get(`pets/${id}`); //function to call the indivdual post id
  console.log(response.data);
  return response.data;
};

const createPost = async (name, image, type, available) => {
  const response = await instance.post("/pets/", {
    name: name,
    image: image,
    type: type,
    adopted: available,
  });
  return response.data;


};
export { getOnePet, getAllPets, createPost };
