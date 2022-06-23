const AuthService = {
  setToken: (token) => {
    localStorage.setItem('token', token);
  },

  getToken: () => {
    const token = localStorage.getItem('token') || null;
    return token;
  },
};

export default AuthService;