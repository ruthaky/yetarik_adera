
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
