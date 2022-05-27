import React, { useState, useEffect, useReducer, useContext } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Table,
  Badge,
  Form,
} from "react-bootstrap";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import "./Categories.scss";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import UseTitle from "../../hooks/useTitle";
import { useAlert, positions } from "react-alert";
import { AppContext } from "../../App";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, categories: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
const initialSelected = {
  name: "",
  image:
    "https://media.istockphoto.com/vectors/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-vector-id943483254?k=20&m=943483254&s=612x612&w=0&h=QcqcSxs0OA7BBdsSKkGB1rdA4aExrfPnqa0H14SgiVc=",
  imageFile: "",
  status: true,
};
function Categories() {
  UseTitle("Categories");
  const [selected, setSelected] = useState(initialSelected);
  const [click, setClick] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const alert = useAlert();
  const [{ loading, error, categories }, dispatch] = useReducer(reducer, {
    categories: [],
    loading: true,
    error: "",
  });

  const fetchData = async () => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const result = await axios.get(
        process.env.REACT_APP_API_URL + "api/category"
      );
      dispatch({ type: "FETCH_SUCCESS", payload: result.data });
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err.message });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  function catImageHandler(file) {
    let temp_selected = { ...selected };
    if (file !== null) {
      if (typeof file.type.split("image/")[1] === "undefined") {
        temp_selected.image = "/images/invalid-file.png";
        setSelected(temp_selected);
      } else {
        temp_selected.imageFile = file;
        fileToDataUri(file).then((dataUri) => {
          temp_selected["image"] = dataUri;
          setSelected(temp_selected);
        });
      }
    }
  }
  async function submitCategory(event) {
    setUploadError("");
    if (
      selected.imageFile !== "" &&
      selected.name.trim() !== "" &&
      selected.status.toString().trim() !== "status"
    ) {
      var formData = new FormData();
      formData.append("textData", JSON.stringify({ ...selected, image: "" }));
      formData.append("categoryImage", selected.imageFile);
      try {
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "api/category/add",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setClick(false);
        setSelected(initialSelected);
        fetchData();
        var isEdit = typeof response.data.name === "undefined";
        alert.success(
          isEdit
            ? "updated !"
            : "Category added with name " + response.data.name
        );
      } catch (err) {
        setUploadError("Error while uploading, check your data and try again");
        console.log(err);
      }
    } else {
      setUploadError("Problem encountered, Please don't leave any field empty");
    }
  }
  function editCategory(category) {
    setUploadError("");
    setSelected(category);
    setClick(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setSelected((prevSelected) => {
      return { ...prevSelected, [name]: value };
    });
  }

  async function deleteCategory(category) {
    try {
      await axios.delete(
        process.env.REACT_APP_API_URL + "api/category/delete",
        {
          data: { id: category._id },
        }
      );
      alert.success("Deleted !");
      fetchData();
    } catch (error) {
      if (error.response.status === 400) {
        alert.show(
          "Cannot remove a non-empty category, try setting it's status to inactive",
          { position: positions.MIDDLE }
        );
      } else {
        alert.show("Could not delete, try again later", {
          position: positions.MIDDLE,
        });
      }
    }
  }
  const appContext=useContext(AppContext)

  return (
    <Container fluid className="mx-2 categories">
      <Row className="title align-items-center mx-0">
        <Col lg={2}>
          <Row>
            {" "}
            <h2>Categories</h2>
            <small className="text-muted">{appContext.getCurrentDate()}</small>{" "}
          </Row>
        </Col>

        <Col> </Col>
      </Row>
      <hr />
      <div className="main-body">
        <Container fluid>
          <Row>
            <Col md="7">
              {loading ? (
                <center>
                  <LoadingBox />
                </center>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <Table
                  className="table-borderless align-middle"
                  hover
                  size="sm"
                >
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Food Count</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, catInd) => {
                      return (
                        <tr
                          key={"category" + catInd}
                          className={
                            category._id === selected._id ? "selected" : ""
                          }
                        >
                          <td>
                            <img
                              alt="category"
                              src={category.image}
                              className="rounded-circle img-thumbnail"
                            />
                          </td>
                          <td>{category.name}</td>
                          <td>{category.foodCount}</td>
                          <td>
                            {category.status ? (
                              <Badge pill bg="primary" className="pill-active">
                                Active
                              </Badge>
                            ) : (
                              <Badge
                                pill
                                bg="primary"
                                className="pill-inactive"
                              >
                                InActive
                              </Badge>
                            )}
                          </td>
                          <td>
                            <EditIcon
                              className="mr-2 icon"
                              onClick={() => editCategory(category)}
                              style={{ cursor: "pointer" }}
                            ></EditIcon>
                            <ClearIcon
                              className="mr-2 icon2"
                              onClick={() => deleteCategory(category)}
                              style={{ cursor: "pointer" }}
                            ></ClearIcon>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </Col>
            <Col md="5" className="edit py-3 rounded">
              <Row>
                {" "}
                <Col md={8}>
                  <h4>{click ? "Update" : "Add New"} Category</h4>
                </Col>
                {click && (
                  <Button
                    className="default-button"
                    style={{ fontSize: "13px" }}
                    onClick={() => {
                      setClick(false);
                      setSelected(initialSelected);
                    }}
                  >
                    Add New Category
                  </Button>
                )}
              </Row>
              <hr />
              <br />
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitCategory();
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Category Name"
                  className="formlen"
                  value={selected.name}
                  onChange={handleChange}
                  name="name"
                />
                <br />{" "}
                <Row>
                  <Col md={6} className="my-auto">
                    <Form.Group controlId="foodImage" className="mb-3">
                      <Form.Label className="upload-image">
                        <UploadFileIcon /> Upload Image
                      </Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(event) =>
                          catImageHandler(event.target.files[0] || null)
                        }
                        hidden
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <img
                      alt="selected-category"
                      src={selected.image}
                      className="img-thumbnail rounded-circle"
                      style={{ width: 200, height: 200 }}
                    />
                  </Col>
                </Row>
                <br />
                <Form.Control
                  as="select"
                  className="form-select"
                  value={selected.status}
                  name="status"
                  onChange={handleChange}
                >
                  <option value="status">Status</option>
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </Form.Control>
                <br />
                <br />
                <span style={{ color: "red" }}>{uploadError}</span>
                <Row>
                  <Col className="d-grid">
                    <Button
                      className="default-button order-popup-bottom-button"
                      style={{ width: "100%" }}
                      onClick={submitCategory}
                    >
                      {click ? "Update" : "Add"} Category
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}
export default Categories;
