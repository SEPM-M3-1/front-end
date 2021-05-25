// import React, { useState, useEffect } from "react";
// import ProfileM from "./ProfileM";
// import * as api from "../../../Util/api";

// const ProfileMBox = ({ email }) => {
//   const [mProfile, setMProfile] = useState({
//     fullName: " ",
//     phone: " ",
//     email: "",
//   });

//   useEffect(() => {
//     getMprofile();
//   }, []);

//   const getMprofile = async () => {
//     const email = localStorage.getItem("email");
//     try {
//       const getMprofileResponse = await api.fetchManagerProfileByEmail({
//         email,
//       });
//       if (getMprofileResponse.status === 200) {
//         setMProfile({
//           fullName: getMprofileResponse.data.fullName,
//           phone: getMprofileResponse.data.phone,
//           email: getMprofileResponse.data.email,
//         });
//         console.log(getMprofileResponse.data);
//       }
//       console.log(mProfile);
//     } catch (error) {
//       alert("get the init data fail!");
//     }
//   };

//   return <ProfileM mProfile={mProfile} setMProfile={setMProfile} />;
// };

// export default ProfileMBox;
