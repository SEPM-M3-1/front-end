import axios from "axios";

const baseUrl = "http://localhost:8080";

export const login = ({ email, password, type }) =>
  axios({
    method: "post",
    url: `${baseUrl}/login`,
    data: {
      email,
      password,
      type,
    },
  });

export const sigunm = ({ email, fullName, password, phone }) =>
  axios({
    method: "post",
    url: `${baseUrl}/signup`,
    data: {
      email,
      fullName,
      password,
      phone,
    },
  });

export const signups = ({
  email,
  fullName,
  password,
  phone,
  address,
  hourLimits,
}) =>
  axios({
    method: "post",
    url: `${baseUrl}/registration`,
    data: {
      email,
      fullName,
      password,
      phone,
      address,
      hourLimits,
    },
  });

export const ChangePassword = ({ type, id, oldPassword, password }) =>
  axios({
    method: "put",
    url: `${baseUrl}/passwordreset`,
    data: {
      type,
      id,
      oldPassword,
      password,
    },
  });

export const setAvailableTime = ({ ownerId, endDate, startDate }) =>
  axios({
    method: "post",
    url: `${baseUrl}/staff/${ownerId}/settime`,
    data: {
      ownerId,
      endDate,
      startDate,
    },
  });

export const changeManagerProfile = ({ id, fullName, phone, email }) =>
  axios({
    method: "put",
    url: `${baseUrl}/managerprofile`,
    data: {
      id,
      email,
      fullName,
      phone,
    },
  });

export const fetchManagerProfileByEmail = ({ email }) =>
  axios({
    method: "get",
    url: `${baseUrl}/managerprofile`,
    params: {
      email,
    },
  });

export const fetchStaffProfileByEmail = ({ email }) =>
  axios({
    method: "get",
    url: `${baseUrl}/staffprofile`,
    params: {
      email,
    },
  });

export const changeStaffProfile = ({ id, fullName, phone, email, hourLimits, address, preferredName }) =>
  axios({
    method: "put",
    url: `${baseUrl}/staffprofile/change`,
    data: {
      id,
      fullName,
      phone,
      email,
      hourLimits,
      address,
      preferredName,
    },
  });

export const getAllManagers = (type) =>
  axios({
    method: "get",
    url: `${baseUrl}/allmanagers`,
    params: {
      type,
    },
  });

export const getAllStaffs = (type) =>
  axios({
    method: "get",
    url: `${baseUrl}/allstaffs`,
    params: {
      type,
    },
  });

export const changeHours = (email, hours) =>
  axios({
    method: "put",
    url: `${baseUrl}/newLimitHours`,
    data: {
      email,
      hours,
    },
  });

  export const getNotification = (email) =>
  axios({
    method: "get",
    url: `${baseUrl}/notification/${email}`,
  });

export const refuse = ({ email, fullName, startTime, endTime }) =>
  axios({
    method: "delete",
    url: `${baseUrl}/refuse`,
    data: {
      email,
      fullName,
      startTime,
      endTime,
    },
  });
