import axios from "axios";

const baseUrl = "http://localhost:8080";

export const login = ({ email, password, type }) =>
  axios({
    method: "get",
    url: `${baseUrl}/login`,
    params: {
      email,
      password,
      type,
    },
  });

export const sigunm = ({ email, fullName, password, mobile }) =>
  axios({
    method: "post",
    url: `${baseUrl}/signupm`,
    params: {
      email,
      fullName,
      password,
      mobile,
    },
  });

export const siguns = ({
  email,
  fullName,
  password,
  mobile,
  address,
  workingHours,
  preferredName,
}) =>
  axios({
    method: "post",
    url: `${baseUrl}/signups`,
    params: {
      email,
      fullName,
      password,
      mobile,
      address,
      workingHours,
      preferredName,
    },
  });

export const changeMprofile = ({ fullName, phoneNum, email }) =>
  axios({
    method: "put",
    url: `${baseUrl}/changemprofiles`,
    params: {
      email,
      fullName,
      phoneNum,
    },
  });

export const ChangePassword = ({ type, id, oldPassword, password }) =>
  axios({
    method: "put",
    url: `${baseUrl}/Changepasswords`,
    params: {
      type,
      id,
      oldPassword,
      password,
    },
  });

export const getMprofile = ({ email }) =>
  axios({
    method: "get",
    url: `${baseUrl}/getmprofile`,
    params: {
      email,
    },
  });

export const getSprofile = ({ email }) =>
  axios({
    method: "get",
    url: `${baseUrl}/getmprofile`,
    params: {
      email,
    },
  });

export const changeSprofile = ({ fullName, phoneNum, email }) =>
  axios({
    method: "put",
    url: `${baseUrl}/changemprofiles`,
    params: {
      email,
      fullName,
      phoneNum,
    },
  });

export const getNotification = (email) =>
  axios({
    method: "get",
    url: `${baseUrl}/notification/${email}`,
  });

export const refuse = ({ email, fullName, startTime, endTime }) => axios({
  method: "delete",
  url: `${baseUrl}/refuse`,
  data: {
    email,
    fullName,
    startTime,
    endTime,
  }
})

export const getAllManagers = (type) =>
  axios({
    method: "get",
    url: `${baseUrl}/all-managers`,
    params: {
      type,
    },
  });

export const getAllStaffs = (type) =>
  axios({
    method: "get",
    url: `${baseUrl}/all-staffs`,
    params: {
      type,
    },
  });

export const changeHours = (email, hours) => axios({
  method: 'put',
  url: `${baseUrl}/newLimitHours`,
  data: {
    email,
    hours
  }
})



