import axios from 'axios';

const baseUrl = "http://localhost:3000";

export const login = ({ email, password, type }) => axios({
  method: 'get',
  url: `${baseUrl}/login`,
  params: {
    email,
    password,
    type,
  },
})
