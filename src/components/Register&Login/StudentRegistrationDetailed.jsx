import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Box } from "@chakra-ui/react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import swal from "sweetalert";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterDetailed = ({
  courseType,
  courseName,
  courseBranch,
  eligibility,
  eligibilityGradPer,
}) => {
  const initialValues = {
    candidateName: "",
    fathersname: "",
    mothersname: "",
    gender: "",
    QualifiedCourse: "",
    domicile: "",
    category: "",
    lastExamType: "",
    qualification: "",
    passingYear: "",
    qualificationPercentage: "",
    nationality: "",
    admissionSession: "",
    qualifyingEntranceExam: "",
    entranceBasedType: "",
    marks: "",
    totalMarks: "",
    physics: "",
    chemistry: "",
    biology: ""
  };

  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem("currentUser"));
  const name1 = userData.name;
  const email1 = userData.email;
  const fathername = userData.fathersname;
  const mothername = userData.mothersname;
  const mobile = userData.mobile;
  const dob1 = userData.dob;
  const id = userData._id;
  console.log(id, "djfksldjf");
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  const [isQaulified, setIsqualified] = useState(false);

  const formattedDate = formatDate(dob1);

  // Define the validation schema using Yup
  const RegisterSchema = Yup.object().shape({
    gender: Yup.string().required("Gender is required"),
    domicile: Yup.string().required("Domicile is required"),
    category: Yup.string().required("Category is required"),
    lastExamType: Yup.string().required(
      "Last Exam Pass/Appear Type is required"
    ),
    QualifiedCourse: Yup.string().required("Course is required"),
    qualification: Yup.string().required("Qualification is required"),
    passingYear: Yup.string().required("Last Year Passing Year is required"),
    qualificationPercentage: Yup.string()
      .required("Qualifying Exam Percentage is required")
      .when("category", {
        is: (category) => !!category && !!eligibilityGradPer[category],
        then: (schema) =>
          schema.test({
            test: (value) => {
              const minValue = eligibilityGradPer[values.category];
              return !isNaN(value) && parseFloat(value) >= minValue;
            },
            message: ({ min }) =>
              `Qualifying Exam Percentage must be greater than or equal to ${min}`,
          }),
      }),
    nationality: Yup.string().required("Nationality is required"),
    qualifyingEntranceExam: Yup.string().required(
      "Qualifying Entrance Exam is required"
    ),
    physics: Yup.string().required("Marks is required"),
    chemistry: Yup.string().required("Marks is required"),
    biology: Yup.string().required("Marks is required"),
    admissionSession: Yup.string().required("Session is required"),

    totalMarks: Yup.string().required("Total Marks is required"),
    entranceBasedType: Yup.string().required("Entrance Based Type is required"),
  });

  const [isPercentageValid, setIsPercentageValid] = useState(true);
  const {
    isValid,
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      handleSubmit1();
    },
  });
  useEffect(() => {
    const calculatePercentage = () => {
      const marks = parseFloat(values.marks);
      const totalMarks = parseFloat(values.totalMarks);

      if (!isNaN(marks) && !isNaN(totalMarks)) {
        const percentage = ((marks / totalMarks) * 100).toFixed(2);
        values.qualificationPercentage = percentage;
        setFieldValue(
          "qualificationPercentage",
          ((marks / totalMarks) * 100).toFixed(2)
        );
        setIsPercentageValid(percentage >= eligibilityGradPer[values.category]);
      }
    };

    calculatePercentage();
  }, [values.marks, values.totalMarks]);

  const data = {
    ...values,
    courseType,
    courseName,
    courseBranch,
    eligibility,
    id,
  };
  console.log(data, "data of Data");
  const handleSubmit1 = async (e) => {
    try {
      const res = await fetch(`https://sssutms.ac.in/api/registerupdates`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("StudentRegistrationresponse", res);
      if (res.ok) {
        swal({
          title: "Congratulations",
          text: "Registration done successfully!",
          icon: "success",
          buttons: "OK",
        });
        navigate("/studentWaiting");
      } else {
        console.log("Registration update failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;

  const admissionSessionOptions = [currentYear, previousYear];
  console.log(eligibilityGradPer, "Eligibility Graduation Percent ");

  return (
    <>
      <Container
        fluid
        className="shadow p-3 mb-3 bg-body rounded"
        style={{ width: "90%", backgroundColor: "#e8e5d1", marginTop: "20px" }}
      >
        <Box
          marginBottom={"20px"}
          backgroundColor={"#00cdac"}
          p={4}
          color="white"
          mt={8}
          borderRadius="md"
          shadow="md"
        >
          Registration Details
        </Box>
        <div style={{ overflow: "hidden" }}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="candidateName">
                  <Form.Label>
                    <b>Candidate Name</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="candidateName"
                    disabled="true"
                    required
                    value={name1}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="fathersName">
                  <Form.Label>
                    <b>Father's Name</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    disabled="true"
                    name="fathersName"
                    value={fathername}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="mothersName">
                  <Form.Label>
                    <b>Mother's Name</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    disabled="true"
                    name="mothersName"
                    autoComplete="off"
                    onChange={handleChange}
                    value={mothername}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="gender">
                  <Form.Label>
                    <b>Gender</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="gender"
                    autoComplete="off"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    {errors.gender && touched.gender ? (
                      <p className="error" style={{ color: "red" }}>
                        {errors.gender}
                      </p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>
                    <b>Email</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    autoComplete="off"
                    disabled="true"
                    required
                    value={email1}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Label>
                    <b>Mobile</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="mobile"
                    disabled="true"
                    autoComplete="off"
                    value={mobile}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="dateOfBirth">
                  <Form.Label>
                    <b>Date of Birth</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="dateOfBirth"
                    autoComplete="off"
                    disabled="true"
                    value={formattedDate}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="domicile">
                  <Form.Label>
                    <b>Domicile</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="domicile"
                    autoComplete="off"
                    value={values.domicile}
                    onChange={handleChange}
                  >
                    <option value="Select Domicile">Select Domicile</option>
                    <option value="MP">MP</option>
                    <option value="ALL INDIA">ALL INDIA</option>
                    {errors.domicile && touched.domicile ? (
                      <p className="error">{errors.domicile}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>
                    <b>Category</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="category"
                    autoComplete="off"
                    value={values.category}
                    onChange={handleChange}
                  >
                    <option value="1">Select Category</option>
                    <option value="gen">Gen</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                    <option value="obc">OBC</option>
                    {errors.category && touched.category ? (
                      <p className="error">{errors.category}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="lastExamType">
                  <Form.Label>
                    <b>Last Exam Pass/Appear Type</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="lastExamType"
                    autoComplete="off"
                    value={values.lastExamType} // You should also set the value here
                    onChange={handleChange}
                  >
                    <option value="1">Select</option>
                    <option value="Regular">Regular</option>
                    <option value="Private">Private</option>
                    {errors.lastExamType && touched.lastExamType ? (
                      <p className="error">{errors.lastExamType}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="lastExamType">
                  <Form.Label>
                    <b>Qualification</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="qualification"
                    autoComplete="off"
                    value={values.qualification}
                    onChange={handleChange}
                  >
                    <option value="1">Select</option>
                    <option value="Tenth" disabled={true}>
                      10th
                    </option>
                    <option value="12th">12th</option>
                    {errors.qualification && touched.qualification ? (
                      <p className="error">{errors.qualification}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="passingYear">
                  <Form.Label>
                    <b>Last Passing Year</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="passingYear"
                    autoComplete="off"
                    value={values.passingYear} // You should also set the value here
                    onChange={handleChange}
                  >
                    <option value="1">Select passing year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="1999">1999</option>
                    <option value="2021">1986</option>
                    {errors.passingYear && touched.passingYear ? (
                      <p className="error">{errors.passingYear}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="nationality">
                  <Form.Label>
                    <b>Nationality</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="nationality"
                    autoComplete="off"
                    value={values.nationality}
                    onChange={handleChange}
                  >
                    <option value="1">Select Nationality</option>
                    <option value="india">Indian</option>
                    {errors.nationality && touched.nationality ? (
                      <p className="error">{errors.nationality}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="admissionSession">
                  <Form.Label>
                    <b>Admission Session</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="admissionSession"
                    autoComplete="off"
                    value={values.admissionSession}
                    onChange={handleChange}
                  >
                    <option value="1">Select Session</option>
                    {admissionSessionOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                    {errors.admissionSession && touched.admissionSession ? (
                      <p className="error">{errors.admissionSession}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="QualifiedCourse">
                  <Form.Label>
                    <b>Qualified Course</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="QualifiedCourse"
                    autoComplete="off"
                    value={values.QualifiedCourse}
                    onChange={handleChange}
                  >
                    <option value="1">Select Course</option>
                    <option value="PCB">PCB</option>
                    {errors.QualifiedCourse && touched.QualifiedCourse ? (
                      <p className="error">{errors.QualifiedCourse}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="physics">
                  <Form.Label>
                    <b>Physics</b> <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="physics"
                    autoComplete="off"
                    value={values.physics}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="chemistry">
                  <Form.Label>
                    <b>Chemistry</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="chemistry"
                    autoComplete="off"
                    value={values.chemistry}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="biology">
                  <Form.Label>
                    <b>Biology</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="biology"
                    autoComplete="off"
                    value={values.biology}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="totalMarks">
                  <Form.Label>
                    <b>Total Obtain</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="totalMarks"
                    autoComplete="off"
                    value={values.totalMarks}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="marks">
                  <Form.Label>
                    <b>Obtain Marks</b> <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="marks"
                    autoComplete="off"
                    value={values.marks}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="totalMarks">
                  <Form.Label>
                    <b>Total Marks</b>
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="totalMarks"
                    autoComplete="off"
                    value={values.totalMarks}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group
                  className="mb-3"
                  controlId="qualificationPercentage"
                >
                  <Form.Label>
                    <b>Qualifying Exam Percentage</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="qualificationPercentage"
                    autoComplete="off"
                    value={`${values.qualificationPercentage}%`}
                    disabled
                  />
                  {errors.qualificationPercentage &&
                  touched.qualificationPercentage ? (
                    <p className="error" style={{ color: "red" }}>
                      {errors.qualificationPercentage}
                    </p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12} style={{ marginLeft: "400px" }}>
                <Button variant="default" className="me-2">
                  Cancel
                </Button>
                <Button
                  style={{
                    backgroundImage:
                      "linear-gradient(96deg, #ff5f6d , #ffc371 100%)",
                    color: "white",
                    width: "w-20 w-md-auto", // Adjusted width classes
                    border: "none",
                    padding: "10px 15px !important",
                    borderRadius: "5px",
                    fontSize: "14px !important",
                    transition: "background-color 0.3s", // Add transition for smooth color change
                    "&:hover": {
                      background: "#4CAF50", // Change the color on hover
                    },
                  }}
                  type="submit"
                  disabled={!isValid || !isPercentageValid}
                >
                  Register Now
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default RegisterDetailed;
