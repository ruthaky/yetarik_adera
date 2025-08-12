// import * as React from "react";

// interface EmailTemplateProps {
//   name: string;
//   email: string;
//   phonenumber: string;
//   message: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   name,
//   email,
//   phonenumber,
//   message,
// }) => (
//   <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
//     <h2 style={{ color: "#333" }}>New Contact Form Submission</h2>
//     <p>
//       <strong>Name:</strong> {name}
//     </p>
//     <p>
//       <strong>Email:</strong> {email}
//     </p>
//     <p>
//       <strong>Phone Number:</strong> {phonenumber}
//     </p>
//     <p>
//       <strong>Message:</strong> {message}
//     </p>
//   </div>
// );

import * as React from "react"
import { Html, Heading, Text } from "@react-email/components";
const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phonenumber,
  subject,
  message,
}: {
  firstName: string;
 lastName: string;
  email: string;
  phonenumber: string;
  subject: any;
  message: string;
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <Text>Email: {email}</Text>
      <Text>Phonenumber: {phonenumber}</Text>
      <Text>Subject : {subject}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
export default EmailTemplate;
