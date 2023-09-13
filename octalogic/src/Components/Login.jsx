import { AuthContext } from "../Context/AuthContext";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let { isAuth, setIsAuth } = useContext(AuthContext);
  let navigate = useNavigate();

  let handleLogin = async () => {
    // console.log(email,password);
    let resp = await axios.get("https://octalogic-uei3.onrender.com/users");
    // console.log(data.data);
    let data = resp.data;
    data?.map((e) => {
      if (email == e.email && password == e.password) {
        setIsAuth(true);
        navigate("/courses");
      }
    });
  };

  useEffect(() => {
    console.log(isAuth);
  }, []);

  return (
    <Container
      mt={"100px"}
      boxShadow={"0 0 10px pink"}
      p={"25px"}
      borderRadius={"10px"}
    >
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <Flex justifyContent={"space-between"} padding={"0 10px"}>
          <Button colorScheme={"orange"} onClick={handleLogin}>
            Submit
          </Button>
          <Text>
            New user?
            <Link
              to={"/signup"}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Signup
            </Link>
          </Text>
        </Flex>
      </FormControl>
    </Container>
  );
};

export default Login;
