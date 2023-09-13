import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSignup = async () => {
    //    console.log(email,password);
    try {
      const response = await axios.post("http://localhost:8080/users", {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      mt={"100px"}
      boxShadow={"0 0 10px pink"}
      p={"25px"}
      borderRadius={"10px"}
    >
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" />
        <br />
        <br />

        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />

        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />

        <Flex justifyContent={"space-between"} padding={"0 10px"}>
          <Button colorScheme={"orange"} onClick={handleSignup}>
            Submit
          </Button>
          <Text>
            {" "}
            Already signed up?{" "}
            <Link
              to={"/login"}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Login
            </Link>
          </Text>
        </Flex>
      </FormControl>
    </Container>
  );
};

export default Signup;
