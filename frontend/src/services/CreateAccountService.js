import axios from "./api";

const CreateAccountService = {
  signUp: async (body) => {
    const response = await axios.post(`user/new`, body);
    return response.headers.authorization;
  }
};

export default CreateAccountService;