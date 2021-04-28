const getIsAuthenticated = state => !!state.auth.token; // или Boolean(state.auth.token);

const getUserEmail = state => state.auth.user.email;

// eslint-disable-next-line
export default { getIsAuthenticated, getUserEmail };
