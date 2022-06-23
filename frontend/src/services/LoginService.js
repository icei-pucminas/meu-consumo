import axios from "./api";

const LoginService = {
  signIn: async (body) => {
    const response = await axios.post(`login`, body);
    return response.headers.authorization;
  }
};

export default LoginService;