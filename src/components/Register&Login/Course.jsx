import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import EligibilityForm from "./ElegibilyForm";
import { Box, Stack, FormControl, FormLabel, Select } from "@chakra-ui/react";

import * as Yup from "yup";
import OnlyHeader from "../../AdminComponent/OnlyHeader";

const CourseSchema = Yup.object().shape({
  selectedType: Yup.string().min(2).max(10).required("Course Type is required"),
  selectedCourse: Yup.string().required("Course is required"),
  selectedBranch: Yup.string().required("Branch is required"),
});

const initialValues = {
  selectedType: "",
  selectedCourse: "",
  selectedBranch: "",
};

const Course = () => {
  const {errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: CourseSchema,
    onSubmit: (values) => {
      handleSearch();
    },
  });
  ///////////course/////
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [eligible, setEligible] = useState("");
  const [eligibilityGradPer, setEligibilityGradPer] = useState("");
  const [errors2, setErrors2] = useState({
    selectedType: "",
    selectedCourse: "",
    selectedBranch: "",
  });

  const courseData = {
    UG: {
      courses: [
        "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY",
        "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY",
        "BACHELOR OF ENGINEERING",
        "BSC(Nursing) SEMESTER",
        "BACHELOR OF ARCHITECTURE",
        "BACHELOR OF ENGINEERING(Lateral)",
        "BACHELOR OF DESIGN",
        "BACHELOR OF DESIGN(Lateral)",
      ],
      branches: {
        "BACHELOR OF ENGINEERING": [
          "AERONAUTICAL ENGINEERING",
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "ELECTRICAL AND ELECTRONICS ENGINEERING",
          "ELECTRICAL ENGINEERING",
          "ELECTRONICS AND COMMUNICATION ENGINEERING",
          "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
          "MECHANICAL ENGINEERING",
          "MINING ENGINEERING",
        ],
        "BSC(Nursing) SEMESTER": ["Nursing"],
        "BACHELOR OF ARCHITECTURE": ["ARCHITECTURE"],
        "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY": ["HOMEOPATHY"],
        "BACHELOR OF ENGINEERING(Lateral)": [
          "AERONAUTICAL ENGINEERING",
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "ELECTRICAL AND ELECTRONICS ENGINEERING",
          "ELECTRICAL ENGINEERING",
          "ELECTRONICS AND COMMUNICATION ENGINEERING",
          "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
          "MECHANICAL ENGINEERING",
          "MINING ENGINEERING",
        ],
        "BACHELOR OF DESIGN": [
          "INDUSTRIAL DESIGN",
          "COMMUNICATION DESIGN",
          "TEXTILE DESIGN",
          "INTERIOR DESIGN",
          "PRODUCT DESIGN",
        ],
        "BACHELOR OF DESIGN(Lateral)": ["INTERIOR DESIGN"],
        "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY": [
          "AYURVEDIC MEDICINE AND SURGERY",
        ],
      },
    },
    PG: {
      courses: [
        "MASTER OF TECHNOLOGY",
        "MASTER OF PHARMACY",
        "MASTER OF PHYSIOTHERAPHY (ORTHOPAEDIC)",
        "MASTER OF MEDICAL LAB TECHNOLOGY(MMLT)",
      ],
      branches: {
        "MASTER OF TECHNOLOGY": [
          "COMPUTER SCIENCE AND ENGINEERING",
          "COMPUTER TECHNOLOGY AND APPLICATION",
          "INFORMATION TECHNOLOGY",
          "SOFTWARE ENGINEERING",
          "DIGITAL COMMUNICATION",
          "ELECTRICAL POWER SYSTEM",
          "INDUSTRIAL DESIGN",
          "POWER ELECTRONICS",
          "STRUCTURAL DESIGN",
          "THERMAL ENGINEERING",
          "VLSI",
        ],
        "MASTER OF PHARMACY": ["PHARMACEUTICS", "PHARMACOLOGY"],
        "MASTER OF PHYSIOTHERAPHY (ORTHOPAEDIC)": ["ORTHOPAEDIC"],
        "MASTER OF MEDICAL LAB TECHNOLOGY(MMLT)": ["HAEMOTOLOGY"],
      },
    },
    Diploma: {
      courses: [
        "DIPLOMA PHARMACY",
        "DIPLOMA BLOOD TRANSFUSION",
        "DIPLOMA DIALYSIS TECHNICIAN",
        "DIPLOMA PHARMACY (AYURVED)",
        "DIPLOMA HUMAN NUTRITION",
        "DIPLOMA MEDICAL LAB AND TECHNICIAN",
        "DIPLOMA X-RAY RADIOGRAPHER TECHNICIAN",
        "DIPLOMA YOGA",
        "DIPLOMA ENGINEERING",
        "DIPLOMA PHARMACY (HOMEOPATHY)",
        "DIPLOMA PARAMEDICAL OPTHALMIC ASSISTENT",
        "DIPLOMA ENGINEERING  (Lateral)",
      ],
      branches: {
        "DIPLOMA PHARMACY": ["PHARMACY"],
        "DIPLOMA BLOOD TRANSFUSION": ["BLOOD TRANSFUSION"],
        "DIPLOMA DIALYSIS TECHNICIAN": ["DIALYSIS TECHNICIAN"],
        "DIPLOMA PHARMACY (AYURVED)": ["AYURVED"],
        "DIPLOMA HUMAN NUTRITION": ["HUMAN NUTRITION"],
        "DIPLOMA MEDICAL LAB AND TECHNICIAN": ["HUMAN NUTRITION"],
        "DIPLOMA X-RAY RADIOGRAPHER TECHNICIAN": [
          "X-RAY RADIOGRAPHER TECHNICIAN",
        ],
        "DIPLOMA YOGA": ["YOGA"],
        "DIPLOMA ENGINEERING": [
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "MECHANICAL ENGINEERING",
          "ELECTRICAL ENGINEERING",
        ],
        "DIPLOMA PHARMACY (HOMEOPATHY)": ["HOMEOPATHIC"],
        "DIPLOMA PARAMEDICAL OPTHALMIC ASSISTENT": ["OPTHALMIC"],
        "DIPLOMA ENGINEERING  (Lateral)": [
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "MECHANICAL ENGINEERING",
          "ELECTRICAL ENGINEERING",
        ],
      },
    },
    PG_DIPLOMA: {
      courses: ["POST GRADUATION DIPLOMA IN COMPUTER APPLICATION"],
      branches: {
        "POST GRADUATION DIPLOMA IN COMPUTER APPLICATION": [
          "COMPUTER APPLICATION",
        ],
      },
    },
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedCourse("");
    setSelectedBranch("");
  };

  const handleCourseChange = (e) => {
    const courseValue = e.target.value;
    setSelectedCourse(courseValue);
    setErrors2((prevErrors) => ({
      ...prevErrors,
      selectedCourse: courseValue ? "" : "Course is required",
    }));
    setSelectedBranch("");
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  ///////////////////////////
  const handleSearch = () => {
    if (!selectedCourse) {
      setErrors2((prevErrors) => ({
        ...prevErrors,
        selectedCourse: "Course is required",
      }));
      return;
    }

    fetch("https://sssutms.ac.in/api/geteligibility", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseType: selectedType,
        courseName: selectedCourse,
        courseBranch: selectedBranch,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEligible(data);
        setEligibilityGradPer(data.eligibilityGradPer);

        console.log("Eligibility data:", data.eligibilityGradPer);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const isValid =
    !errors2.selectedType && !errors2.selectedCourse && selectedBranch !== "";

  return (
    <>
      <OnlyHeader />
      <Container
        className="container-overflow shadow p-3 mb-3 bg-body rounded"
        style={{ maxWidth: "90%", margin: "70px auto" }}
      >
        <Box>
          <Box
            backgroundColor={"#00cdac"}
            p={4}
            color="white"
            mt={8}
            borderRadius="md"
            shadow="md"
          >
            Select Course
          </Box>
          <Stack direction={["column", "row"]} spacing={4} mt={4}>
            <FormControl flex="1">
              <FormLabel>
                <b>
                  Course Type
                  <span style={{ color: "red" }}> * </span>
                </b>
              </FormLabel>
              <Select value={selectedType} onChange={handleTypeChange}>
                <option value="">Select Type</option>
                {Object.keys(courseData).map((type) => (
                  <option key={type} value={type} disabled={type !== "UG"}>
                    {type}
                  </option>
                ))}
              </Select>
              {errors.selectedType && touched.selectedType ? (
                <p className="error">{errors.selectedType}</p>
              ) : null}
            </FormControl>

            <FormControl flex="1">
              <FormLabel>
                <b>Course</b>
                <span style={{ color: "red" }}> * </span>
              </FormLabel>
              <Select value={selectedCourse} onChange={handleCourseChange}>
                <option value=""> Select Course </option>
                {selectedType &&
                  courseData[selectedType].courses.map((course) => (
                    <option
                      key={course}
                      value={course}
                      disabled={
                        [
                          "BACHELOR OF ENGINEERING",
                          "BSC(Nursing) SEMESTER",
                          "BACHELOR OF ARCHITECTURE",
                          "BACHELOR OF ENGINEERING(Lateral)",
                          "BACHELOR OF DESIGN",
                          "BACHELOR OF DESIGN(Lateral)",
                        ].indexOf(course) !== -1
                      }
                    >
                      {course}
                    </option>
                  ))}
              </Select>
              {errors.selectedCourse && touched.selectedCourse ? (
                <p className="error">{errors.selectedCourse}</p>
              ) : null}
            </FormControl>

            <FormControl flex="1">
              <FormLabel>
                <b>Branch</b>
                <span style={{ color: "red" }}> * </span>
              </FormLabel>
              <Select value={selectedBranch} onChange={handleBranchChange}>
                <option value="">Select Branch</option>
                {selectedCourse &&
                  courseData[selectedType].branches[selectedCourse].map(
                    (branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    )
                  )}
              </Select>
              {errors.selectedBranch && touched.selectedBranch ? (
                <p className="error">{errors.selectedBranch}</p>
              ) : null}
            </FormControl>
          </Stack>
          <Button
            style={{
              margin: "30px auto",
              display: "block",
              backgroundImage: "linear-gradient(96deg, #ff5f6d , #ffc371 100%)",
              color: "white",
              width: "w-20 w-md-auto", 
              border: "none",
              padding: "10px 15px !important",
              borderRadius: "5px",
              fontSize: "14px !important",
            }}
            onClick={handleSearch}
            disabled={!selectedCourse || !isValid}
          >
            Search
          </Button>
        </Box>
      </Container>
      {eligible && (
        <EligibilityForm
          eligible={eligible}
          eligibilityGradPer={eligibilityGradPer}
          courseType={selectedType}
          courseName={selectedCourse}
          courseBranch={selectedBranch}
        />
      )}
    </>
  );
};

export default Course;
