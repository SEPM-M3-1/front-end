import axios from 'axios';

const baseUrl = "http://localhost:8080";

export const login = ({ email, password, type }) => axios({
  method: 'get',
  url: `${baseUrl}/login`,
  params: {
    email,
    password,
    type,
  },
})

export const sigunm = ({ email, fullName, password, mobile }) => axios({
  method: 'post',
  url: `${baseUrl}/signupm`,
  params: {
    email,
    fullName,
    password,
    mobile
  },
})

export const siguns = ({ email, fullName, password, mobile,address,workingHours,preferredName }) => axios({
  method: 'post',
  url: `${baseUrl}/signups`,
  params: {
    email,
    fullName,
    password,
    mobile,
    address,
    workingHours,
    preferredName
  },
})
