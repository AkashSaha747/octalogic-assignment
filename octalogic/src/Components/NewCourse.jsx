import React, { useState } from "react";
import {
  FormControl,
  Button,
  Container,
  Flex,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewCourse = () => {
  let navigate = useNavigate();

  let init = {
    course: "",
    description: "",
    instructor: "",
    instrument: "",
    day: "",
    price: 0,
    status: "open",
  };

  let [obj, setObj] = useState(init);

  let addCourse = async () => {
    // console.log(obj);
    try {
      const response = await axios.post("https://octalogic-uei3.onrender.com/courses", obj);

      console.log(response.data);
      navigate("/courses");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      mt={"100px"}
      boxShadow={"0 0 10px black"}
      p={"25px"}
      borderRadius={"10px"}
    >
      <FormControl>
        <Input
          placeholder="Course Name"
          onChange={(e) => {
            setObj({ ...obj, course: e.target.value });
          }}
        ></Input>

        <Input
          mt={"15px"}
          placeholder="Description"
          onChange={(e) => {
            setObj({ ...obj, description: e.target.value });
          }}
        ></Input>

        <Input
          mt={"15px"}
          placeholder="Instructor"
          onChange={(e) => {
            setObj({ ...obj, instructor: e.target.value });
          }}
        ></Input>

        <Select
          placeholder="Instrument"
          mt={"15px"}
          onChange={(e) => {
            setObj({ ...obj, instrument: e.target.value });
          }}
        >
          <option value="Flute">Flute</option>
          <option value="Guitar">Guitar</option>
        </Select>

        <Select
          placeholder="Day of the week"
          mt={"15px"}
          onChange={(e) => {
            setObj({ ...obj, day: e.target.value });
          }}
        >
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </Select>

        <Input
          placeholder="Price"
          mt={"15px"}
          onChange={(e) => {
            setObj({ ...obj, price: e.target.value });
          }}
        ></Input>

        <Flex justifyContent={"space-evenly"} mt={"20px"}>
          <Button
            colorScheme={"teal"}
            onClick={() => {
              navigate("/courses");
            }}
          >
            Cancel
          </Button>
          <Button colorScheme={"orange"} onClick={addCourse}>
            Add Course
          </Button>
        </Flex>
      </FormControl>
    </Container>
  );
};

export default NewCourse;
