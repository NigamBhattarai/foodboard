import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Table,
  Badge,
  Form,
} from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import "./settings.scss";
import { useAlert, positions } from "react-alert";
import axios from "axios";
import UseTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
function Settings() {
  UseTitle("Settings");

  const initialNewUser = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    mobile: "",
    status: false,
    imageFile: undefined,
    profile_image: "",
  };
  const [newUser, setNewUser] = useState(initialNewUser);
  const [isUserEdit, setIsUserEdit] = useState(false);
  const [view, setView] = useState();
  const [submitError, setSubmitError] = useState("");
  const [userList, setUserList] = useState([]);
  const [rolesList, setRolesList] = useState([]);
  const [nullState] = useState();
  const [assignRole, setAssignRole] = useState({
    user: "",
    role: "",
  });
  const alert = useAlert();
  function handleChange(event) {
    const { name, value } = event.target;
    setNewUser((prevSelected) => {
      return { ...prevSelected, [name]: value };
    });
  }
  function handleRoleChange(event) {
    const { name, value } = event.target;
    setAssignRole((prevSelected) => {
      return { ...prevSelected, [name]: value };
    });
  }
  function handleFileChange(event) {
    var file = event.target.files[0];
    if (typeof file.type.split("image/")[1] !== "undefined") {
      var temp_user = { ...newUser };
      fileToDataUri(file).then((dataUri) => {
        temp_user.profile_image = dataUri;
        temp_user.imageFile = file;
        setNewUser(temp_user);
      });
    } else {
      temp_user.imageFile = undefined;
      alert.success("File not supported");
    }
  }
  async function addNewUser() {
    setSubmitError("");
    var formData = new FormData();
    var isImage = isUserEdit ? true : typeof newUser.imageFile !== "undefined";
    if (isImage) {
      try {
        formData.append("imageFile", newUser.imageFile);
        formData.append(
          "textData",
          JSON.stringify({ ...newUser, profile_image: "" })
        );
        await axios.post(
          process.env.REACT_APP_API_URL + "users/createuser",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        alert.success(isUserEdit ? "User Updated!" : "User created!", {
          position: positions.TOP_RIGHT,
        });
        setNewUser(initialNewUser);
        setIsUserEdit(false);
        fetchUsers();
      } catch (err) {
        if (typeof err.response !== "undefined") {
          if (err.response.status === 400)
            setSubmitError(
              "An error occured, check if you left any empty spaces or try again."
            );
          else if (err.response.status === 406) {
            setSubmitError("Error occured while uploading image, try again.");
          } else if (err.response.status === 405) {
            setSubmitError("Password must be more than 5 characters long.");
          } else if (err.response.status === 401) {
            setSubmitError("Username already exists, change username.");
          }
        } else {
          setSubmitError("Error occured while uploading image, try again.");
        }
      }
    } else {
      setSubmitError("Upload image before proceeding.");
    }
    console.log(newUser);
  }
  async function assignRoles() {
    if (assignRole.role.trim() === "" || assignRole.user.trim() === "") {
      alert.error("User and Role field can't be empty", {
        position: positions.TOP_RIGHT,
      });
    } else {
      try {
        await axios.post(
          process.env.REACT_APP_API_URL + "users/assignrole",
          assignRole
        );
        alert.success("Successfully Assigned Role.", {
          position: positions.TOP_RIGHT,
        });
        fetchUsers();
      } catch (err) {
        if (err)
          alert.error("Cannot assign role", { position: positions.TOP_RIGHT });
      }
    }
  }
  async function fetchUsers() {
    var users = await axios.get(
      process.env.REACT_APP_API_URL + "users/allusers"
    );
    setUserList(users.data);
  }

  async function fetchRoles() {
    var roles = await axios.get(
      process.env.REACT_APP_API_URL + "users/allusertypes"
    );
    setRolesList(roles.data);
  }

  function checkForTab() {
    var URL = window.location.href;
    var arr = URL.split("/");

    var parameter = arr[arr.length - 1].split("#");
    if (typeof parameter[1] !== "undefined") {
      var p_value = parameter[1];
      switch (p_value) {
        case "userlist":
          setView("userlist");
          break;
        case "setuserrole":
          setView("setuserrole");
          break;
        default:
          setView("default");
          break;
      }
    } else {
      setView("default");
    }
  }

  useEffect(() => {
    checkForTab();
    fetchUsers();
    fetchRoles();
  }, [nullState]);
  return (
    <Container fluid className="mx-2 mt-3">
      <Row className="navigation mx-3 rounded">
        <Col
          as={Link}
          to="#default"
          className="navigation-items px-3 py-1 rounded"
          style={{
            backgroundColor: view === "default" ? "#ea7c69" : "",
            color: view === "default" ? "white" : "",
          }}
          onClick={() => {
            setView("default");
          }}
        >
          Add User
        </Col>
        <Col
          as={Link}
          to="#userlist"
          className="navigation-items rounded"
          style={{
            backgroundColor: view === "userlist" ? "#ea7c69" : "",
            color: view === "userlist" ? "white" : "",
          }}
          onClick={() => setView("userlist")}
        >
          User List
        </Col>
        <Col
          as={Link}
          to="#setuserrole"
          className="navigation-items rounded"
          style={{
            backgroundColor: view === "setuserrole" ? "#ea7c69" : "",
            color: view === "setuserrole" ? "white" : "",
          }}
          onClick={() => setView("setuserrole")}
        >
          Assign User Role
        </Col>
        {/* <Col
          className="navigation-items rounded"
          style={{
            backgroundColor: view === "updatedetails" ? "#ea7c69" : "",
            color: view === "updatedetails" ? "white" : "",
          }}
          onClick={() => setView("updatedetails")}
        >
          Update Details
        </Col> */}
      </Row>
      <Row className="main-view px-5 py-4 mx-3 mt-0 rounded border-top">
        {view === "default" ? (
          <Col className="mx-auto" xs={12} md={6}>
            <h4>{isUserEdit ? "Update" : "Add"} User</h4>
            <hr />
            <Form onSubmit={(e) => e.preventDefault()}>
              <table className="add-form">
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>
                      <Form.Control
                        type="text"
                        name="firstname"
                        value={newUser.firstname}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>
                      <Form.Control
                        type="text"
                        name="lastname"
                        value={newUser.lastname}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <Form.Control
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={newUser.email}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Username</td>
                    <td>
                      <Form.Control
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={newUser.username}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder={isUserEdit ? "(Unchanged)" : ""}
                        autoComplete="off"
                        value={newUser.password}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td>
                      <Form.Control
                        type="text"
                        name="mobile"
                        value={newUser.mobile}
                        onChange={handleChange}
                      />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>
                      <Form.Select
                        name="status"
                        className="add-user-select"
                        style={{ width: "100%" }}
                        value={newUser.status}
                        onChange={handleChange}
                      >
                        <option value={true}>Active</option>
                        <option value={false}>Inactive</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <td>Profile Image {isUserEdit && "(Unchanged)"} </td>
                    <td>
                      <Form.Control
                        type="file"
                        name="imgUrl"
                        onChange={handleFileChange}
                      />{" "}
                    </td>
                    <td>
                      <img
                        className="rounded-circle"
                        style={{ width: "100px", height: "100px" }}
                        src={
                          newUser.profile_image === ""
                            ? process.env.REACT_APP_API_URL + "images/user.png"
                            : newUser.profile_image
                        }
                      ></img>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{ color: "red" }}>{submitError}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Button
                        className="default-button"
                        type="submit"
                        style={{ width: "75%" }}
                        onClick={addNewUser}
                      >
                        Submit
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Form>
          </Col>
        ) : view === "userlist" ? (
          <Col>
            <h4>User List</h4>
            <hr />
            <Table className="table-borderless align-middle" hover size="sm">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => {
                  return (
                    <tr key={"userlist-" + index}>
                      <td>
                        <img
                          alt="user"
                          className="rounded-circle img-thumbnail"
                          src={user.profile_image}
                        />
                      </td>
                      <td>{user.firstname + " " + user.lastname}</td>
                      <td>{user.username}</td>
                      <td>{user.usertype.alias}</td>
                      <td>{user.email}</td>
                      <td>
                        {user.status ? (
                          <Badge pill bg="primary" className="pill-active">
                            Active
                          </Badge>
                        ) : (
                          <Badge pill bg="primary" className="pill-inactive">
                            Inactive
                          </Badge>
                        )}
                      </td>
                      <td>
                        <EditIcon
                          className="mr-2 icon"
                          onClick={() => {
                            setNewUser({ ...user, password: "" });
                            setIsUserEdit(true);
                            setView("default");
                          }}
                        ></EditIcon>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        ) : view === "setuserrole" ? (
          <Col className="assign-role">
            <h4>Assign User Role</h4>
            <hr />
            <Row>
              <Col md={4} className="ml-auto">
                Select User{" "}
              </Col>
              <Col md={4} className="mr-auto">
                Choose Role
              </Col>
            </Row>

            <Row>
              <Col md={4} className="ml-auto">
                <Form.Select
                  size="lg"
                  name="user"
                  onChange={handleRoleChange}
                  value={assignRole.user._id}
                >
                  <option value="">Select User</option>

                  {userList.map((user, index) => {
                    return (
                      <option key={"assign-user-" + index} value={user._id}>
                        {user.username}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={4} className="mr-auto">
                <Form.Select
                  size="lg"
                  name="role"
                  onChange={handleRoleChange}
                  value={assignRole.role._id}
                >
                  <option value="">Select Role</option>
                  {rolesList.map((role, index) => {
                    return (
                      <option key={"user-role-" + index} value={role._id}>
                        {role.alias}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row className="my-5 mx-5">
              <Col>
                <Button
                  className="default-button"
                  style={{ width: "70%" }}
                  onClick={assignRoles}
                >
                  Assign Role
                </Button>
              </Col>
            </Row>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
}

export default Settings;
