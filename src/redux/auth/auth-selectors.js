const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

// eslint-disable-next-line
export default { getIsAuthenticated, getUserEmail };
