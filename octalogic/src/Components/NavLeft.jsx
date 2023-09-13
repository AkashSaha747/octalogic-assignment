import React, { useContext } from "react";
import { Button, Flex, Image, Spacer } from "@chakra-ui/react";
import logo1 from "../Assets/logo1.png";
import home from "../Assets/home.png";
import courses from "../Assets/courses.png";
import logout from "../Assets/logout.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const NavLeft = () => {
  let navigate = useNavigate();
  let { setIsAuth } = useContext(AuthContext);
  return (
    <Flex direction={"column"} w={"8%"} p={"10px"} alignItems={"center"}>
      <Flex>
        <Image height={"60px"} w={"70px"} src={logo1}></Image>
      </Flex>

      <Flex direction={"column"} mt={"100px"}>
        <Button m={"0"} p={"0"} height={"50px"} w={"70px"}>
          {" "}
          <Image
            src={home}
            w={"100%"}
            h={"100%"}
            onClick={() => {
              navigate("/courses");
            }}
          ></Image>{" "}
        </Button>
        <Button
          m={"0"}
          p={"0"}
          height={"50px"}
          w={"70px"}
          mt={"20px"}
          onClick={() => {
            navigate("/home");
          }}
        >
          {" "}
          <Image src={courses} w={"100%"} h={"100%"}></Image>
        </Button>
      </Flex>

      <Flex mt={"400px"}></Flex>

      <Flex>
        <Button
          m={"0"}
          height={"50px"}
          w={"70px"}
          p={"0"}
          onClick={() => {
            setIsAuth(false);
            navigate("/login");
          }}
        >
          {" "}
          <Image src={logout} w={"100%"} h={"100%"}></Image>
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavLeft;
