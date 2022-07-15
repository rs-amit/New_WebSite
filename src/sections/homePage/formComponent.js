// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";
// import { Grid, Box, Typography, Paper, TextField, Button } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";
// import axios from "axios";
// import DoctorImg from "./../../doctor_on_success.webp";
// import DoctorMobileImage from "./../../doctor_mobile.webp";

// const useStyles = makeStyles(() => ({
//   input: {
//     "@media (max-width: 425px)": {
//       height: "10px !important",
//     },
//   },
//   subSection: {
//     "@media (max-width: 768px)": {
//       marginTop: 20,
//     },
//   },
// }));

// const DivView = styled("div")(({ theme }) => ({
//   fontFamily: "Work Sans",
//   [theme.breakpoints.down("sm")]: {
//     width: "90% !important",
//     top: "330px !important",
//     right: "20px",
//   },
//   [theme.breakpoints.between("xs", "sm")]: {
//     position: "absolute",
//     top: 251,
//     width: 440,
//   },
//   [theme.breakpoints.up("md")]: {
//     position: "absolute",
//     top: 290,
//     right: 80,
//     width: 440,
//   },
// }));

// const GridButtonView = styled(Grid)(({ theme }) => ({
//   [theme.breakpoints.up("sm")]: {
//     marginTop: 5,
//   },
//   [theme.breakpoints.down("sm")]: {
//     marginTop: 25,
//   },
// }));

// const TextFieldView = styled(TextField)(({ theme }) => ({
//   fontFamily: "Work Sans",
//   [theme.breakpoints.down("sm")]: {
//     width: "100%",
//     height: 16,
//   },
//   [theme.breakpoints.up("sm")]: {
//     width: "100%",
//   },
// }));

// const FormView = styled(Paper)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     padding: 20,
//     borderRadius: 12,
//   },
//   [theme.breakpoints.up("sm")]: {
//     padding: 20,
//     paddingRight: "5%",
//   },
// }));

// const PaperView = styled("div")(({ theme }) => ({
//   height: 300,
//   boxShadow: "0px 0px 40px #00000014",
//   borderRadius: 12,
//   [theme.breakpoints.down("sm")]: {
//     boxShadow: "none",
//     height: 240,
//     borderRadius: 0,
//   },
//   "@media (max-width: 599px)": {
//     height: "270px !important",
//   },
// }));

// const TextMobileView = styled(Grid)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     paddingTop: "0px !important",
//     marginTop: 13,
//   },
// }));

// const TextMobilePhoneView = styled(Grid)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     paddingTop: "0px !important",
//     marginTop: 33,
//   },
//   [theme.breakpoints.up("sm")]: {
//     marginTop: -10,
//   },
// }));

// const ErrorTextView = styled(Grid)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     marginTop: 30,
//     marginBottom: -40,
//   },
//   [theme.breakpoints.up("sm")]: {
//     marginTop: -8,
//   },
// }));

// const ErrorNameTextView = styled(Grid)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     marginTop: 2,
//     marginBottom: -30,
//   },
//   [theme.breakpoints.up("sm")]: {
//     marginTop: -25,
//   },
// }));

// const ThankYouSubText = styled(Typography)(({ theme }) => ({
//   fontFamily: "Work Sans, Regular",
//   letterSpacing: 1,
//   marginTop: 20,
//   textAlign: "center",
//   [theme.breakpoints.down("sm")]: {
//     fontSize: 16,
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: 20,
//   },
// }));

// const successfullMsg =
//   "We`ve received your consultation request! You should be receiving a call from us within 15 minutes.";

// function FormComponent() {
//   const classes = useStyles();
//   const [values, setValues] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showError, setShowError] = useState(false);
//   const [error, setError] = useState({ fullname: null, phoneNumber: null });

//   useEffect(() => {}, [isSubmitted, showError]);

//   const handleInputValue = (event) => {
//     const { name, value } = event.target;
//     if (showError) {
//       setShowError(false);
//     }

//     if (name === "fullname") {
//       const reg = /^[a-zA-Z ]{2,30}$/;

//       setError({
//         ...error,
//         [name]: !reg.test(value),
//         phoneNumber: !values.phoneNumber,
//       });
//     }
//     if (name === "phoneNumber") {
//       const phoneReg = /^(\+91|\+91\-|0)?[6789]\d{9}$/;

//       setError({
//         ...error,
//         [name]: !phoneReg.test(value),
//         fullname: !values.fullname,
//       });
//     }

//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const onsubmit = async () => {
//     if (error.phoneNumber || error.fullname) {
//       setShowError((prevState) => true);
//       return;
//     }

//     await axios
//       .post(
//         "https://api.vetic.in/lead/create",
//         {
//           name: values.fullname,
//           mobile: values.phoneNumber,
//           country_code: "+91",
//           utm_source: "abc",
//           utm_campaign: "abc",
//           type: "CONSULTATION",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: false,
//         }
//       )
//       .then(() => {
//         setShowError(false);
//         setIsSubmitted((prevState) => !prevState);
//       });
//   };

//   const thankyouMessage = () => {
//     return (
//       <>
//         <div>
//           <Typography
//             color="#55bed4"
//             fontSize={24}
//             fontFamily="Work Sans, Bold"
//             fontWeight="bold"
//             style={{ display: "flex", justifyContent: "center" }}
//           >
//             Thank You!
//           </Typography>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
//               <img
//                 src={DoctorMobileImage}
//                 alt="doctor-laptop-view"
//                 width="89px"
//                 height="108px"
//               />
//             </Box>
//             <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
//               <img
//                 src={DoctorImg}
//                 alt="doctor-mobile-view"
//                 width="112px"
//                 height="135px"
//               />
//             </Box>
//           </div>
//           <ThankYouSubText color="#595f6f">{successfullMsg}</ThankYouSubText>
//         </div>
//       </>
//     );
//   };

//   return (
//     <DivView>
//       <PaperView>
//         <FormView>
//           {isSubmitted ? (
//             thankyouMessage()
//           ) : (
//             <>
//               {" "}
//               <Typography
//                 fontFamily="Work Sans"
//                 fontSize="20px"
//                 style={{ color: "rgb(27, 55, 107)", fontWeight: "bold" }}
//               >
//                 Book Your Consultation.
//               </Typography>
//               <Grid container spacing={2}>
//                 <TextMobileView item xs={12} md={12}>
//                   <TextFieldView
//                     margin="normal"
//                     required
//                     value={values.fullname}
//                     id="fullname"
//                     label="Name"
//                     name="fullname"
//                     type="text"
//                     onChange={handleInputValue}
//                     InputLabelProps={{ style: { fontSize: 14 } }}
//                     inputProps={{
//                       className: classes.input,
//                     }}
//                   />
//                 </TextMobileView>
//                 {showError && error.fullname && (
//                   <ErrorNameTextView
//                     item
//                     xs={12}
//                     display="flex"
//                     justifyContent="left"
//                   >
//                     <Typography color="red" fontSize={8}>
//                       {"Incorrect Name Format"}
//                     </Typography>{" "}
//                   </ErrorNameTextView>
//                 )}
//                 <TextMobilePhoneView item xs={12} md={12}>
//                   <TextFieldView
//                     margin="normal"
//                     required
//                     value={values.phoneNumber}
//                     id="phoneNumber"
//                     label="Phone Number"
//                     type="number"
//                     InputLabelProps={{ style: { fontSize: 14 } }}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">+91</InputAdornment>
//                       ),
//                     }}
//                     inputProps={{
//                       className: classes.input,
//                     }}
//                     name="phoneNumber"
//                     onChange={handleInputValue}
//                   />
//                   {showError && error.phoneNumber && (
//                     <ErrorTextView
//                       item
//                       xs={12}
//                       display="flex"
//                       justifyContent="left"
//                     >
//                       <Typography color="red" fontSize={8}>
//                         {"Incorrect Phone Format"}
//                       </Typography>{" "}
//                     </ErrorTextView>
//                   )}
//                 </TextMobilePhoneView>
//               </Grid>
//               <GridButtonView container spacing={2}>
//                 <Grid item xs={12} md={12}>
//                   <Button
//                     style={{
//                       borderRadius: 8,
//                       backgroundColor: "rgb(27, 55, 107)",
//                       width: "100%",
//                       fontWeight: "bold",
//                       fontSize: "18px",
//                       height: "44px",
//                       textTransform: "none",
//                     }}
//                     variant="contained"
//                     onClick={() => onsubmit()}
//                   >
//                     Book Now
//                   </Button>
//                 </Grid>
//               </GridButtonView>
//             </>
//           )}
//         </FormView>
//       </PaperView>
//     </DivView>
//   );
// }

// export default FormComponent;
