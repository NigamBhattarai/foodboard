import React, { useContext, useEffect, useState } from "react";
import { Col, Modal, Row, Button, Form, Container } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "./AddFoodPopup.scss";
import { FoodManagementContext } from "./FoodManagement";

function AddFoodPopup(props) {
  const foodManagementContext = useContext(FoodManagementContext);
  const itemID = props.itemID;
  const initialAddOns = [
    {
      name: "extra cheese",
      price: 10,
    },
    {
      name: "extra jhol",
      price: 5,
    },
    {
      name: "extra piece",
      price: 20,
    },
  ];
  const initialFoodState = {
    name: "",
    image:
      "https://media.istockphoto.com/vectors/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-vector-id943483254?k=20&m=943483254&s=612x612&w=0&h=QcqcSxs0OA7BBdsSKkGB1rdA4aExrfPnqa0H14SgiVc=",
    imageFile: "",
    category: "",
    code: "",
    description: "",
    status: "",
    veg: false,
  };
  const initialVariantsState = {
    default: false,
    name: "",
    image:
      "https://media.istockphoto.com/vectors/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-vector-id943483254?k=20&m=943483254&s=612x612&w=0&h=QcqcSxs0OA7BBdsSKkGB1rdA4aExrfPnqa0H14SgiVc=",
    imageFile: "",
    price: 0,
    sourLevel: 0,
  };
  const categories = [
    { id: 0, name: "Fast Food" },
    { id: 1, name: "Dairy Product" },
    { id: 2, name: "Continental" },
  ];

  //States
  const [food, setFood] = useState({ ...initialFoodState });
  const [addOns, setAddOns] = useState([...initialAddOns]);
  const [isEdit, setIsEdit] = useState(false);
  const [variants, setVariants] = useState([
    { ...initialVariantsState, default: true },
  ]);

  function addToBillClicked(e) {
    props.onHide(e);
  }

  function checkHandler(i) {
    let temp_state = [...addOns];
    temp_state[i].selected = !temp_state[i].selected;
    setAddOns(temp_state);
  }

  function handleCategoryChange(event) {
    const { name, value } = event.target;
    setFood((prevFood) => {
      return { ...prevFood, category: value };
    });
  }

  function addVariant() {
    setVariants([...variants, initialVariantsState]);
  }

  function removeVariant(index) {
    var temp_variants = [...variants];
    temp_variants.splice(index, 1);
    setVariants([...temp_variants]);
  }

  function textChangeHandlerVariants(event, index, textHandle) {
    var temp_variants = [...variants];
    temp_variants[index][textHandle] = event.target.value;
    setVariants([...temp_variants]);
  }

  function textChangeHandlerFood(event, textHandle) {
    var temp_food = { ...food };
    temp_food[textHandle] = event.target.value;
    setFood({ ...temp_food });
  }

  function selectChangeHandler(event, handle) {
    var temp_food = { ...food };
    temp_food[handle] = event.target.value;
    setFood({ ...temp_food });
  }

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  function foodImageHandler(file) {
    var temp_food = { ...food };
    if (!file) {
      temp_food["imageFile"] = "";
      temp_food["image"] = initialFoodState.image;
      setFood({ ...temp_food });
    } else {
      fileToDataUri(file).then((dataUri) => {
        temp_food["imageFile"] = file;
        temp_food["image"] = dataUri;
        setFood({ ...temp_food });
      });
    }
  }

  function variantImageHandler(file, index) {
    var temp_variants = [...variants];
    if (!file) {
      temp_variants[index]["imageFile"] = "";
      temp_variants[index]["image"] = initialVariantsState[0].image;
      setVariants([...temp_variants]);
    } else {
      fileToDataUri(file).then((dataUri) => {
        temp_variants[index]["imageFile"] = file;
        temp_variants[index]["image"] = dataUri;
        setVariants([...temp_variants]);
      });
    }
  }

  function clearPopup() {
    setFood(initialFoodState)
    setVariants([{ ...initialVariantsState, default: true }])
    setAddOns([...initialAddOns])
  }

  useEffect(() => {
    if(itemID>=0) {
      setIsEdit(true);
      clearPopup();
      var selectedFood = foodManagementContext.state.itemData.filter((value, index, array) => {return value.id===itemID})[0];
      setFood(selectedFood)
      selectedFood.variants&&setVariants(selectedFood.variants)
      selectedFood.addOns&&setAddOns(selectedFood.addOns)
    } else {
      setIsEdit(false);
      setFood(initialFoodState)
      setVariants([{ ...initialVariantsState, default: true }])
    }
  }, [props.show]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="order-popup-modal"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {isEdit?"Update":"Add New"} Food Item
        </Modal.Title>
        <CancelIcon onClick={props.onHide} className="order-popup-close-btn" />
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={3}>
            <Form.Control
              as="select"
              className="form-select"
              value={food.category}
              name="status"
              onChange={handleCategoryChange}
            >
              <option value="none">Select Category</option>
              {categories.map((value, index, array) => {
                return (
                  <option key={"categories-" + index} value={value.name}>
                    {value.name}
                  </option>
                );
              })}
            </Form.Control>
          </Col>
          <Col md={6}>
            <Form.Control
              onChange={(e) => {
                textChangeHandlerFood(e, "name");
              }}
              type="text"
              value={food.name}
              className="add-food-input food-name-input"
              placeholder="Food name"
            ></Form.Control>
          </Col>
          <Col md={3}>
            <Form.Group controlId="foodImage" className="mb-3">
              <Form.Label className="upload-image">
                <UploadFileIcon /> Upload Image
              </Form.Label>
              <Form.Control
                type="file"
                onChange={(event) =>
                  foodImageHandler(event.target.files[0] || null)
                }
                hidden
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Row className="mb-4">
              <Col md={4}>
                <Form.Control
                  onChange={(e) => {
                    textChangeHandlerFood(e, "code");
                  }}
                  type="text"
                  className="add-food-input code-input"
                  placeholder="#Code"
                ></Form.Control>
              </Col>
              <Col md={8}>
                <Form.Control
                  onChange={(e) => {
                    textChangeHandlerFood(e, "description");
                  }}
                  as="textarea"
                  className="add-food-input description-input"
                  placeholder="Description"
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Control
                  as="select"
                  className="form-select"
                  value={food.veg}
                  onChange={(e) => {
                    selectChangeHandler(e, "veg");
                  }}
                  name="veg"
                >
                  <option value={false}>Non Veg</option>
                  <option value={true}>Veg</option>
                </Form.Control>
              </Col>
              <Col md={4}>
                <Form.Control
                  as="select"
                  className="form-select"
                  value={food.status}
                  onChange={(e) => {
                    selectChangeHandler(e, "status");
                  }}
                  name="status"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Form.Control>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <img
              src={food.image}
              className="rounded-circle img-fluid px-4"
              alt="food"
            />
          </Col>
        </Row>
        <Container className="mt-4">
          Addons:
          <Row>
            {addOns.map((value, index, array) => {
              return (
                <Col
                  xs={4}
                  key={value.id + value.name}
                  className="p-2 order-popup-variant-checkbox"
                >
                  <Form.Check
                    type={"checkbox"}
                    id={``}
                    checked={value.selected}
                    onChange={(e) => {
                      checkHandler(index);
                    }}
                    label={value.name}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <hr style={{ borderTop: "1px dashed #8F8F8F" }} />
        {variants.map((value, varInd, array) => {
          return (
            <Container fluid key={"variant-" + varInd}>
              {varInd > 0 ? <hr /> : ""}
              {value.default ? (
                <Row>
                  <Col md={12} style={{ color: "#8F8F8F" }}>
                    Default Variant
                  </Col>
                </Row>
              ) : (
                <Row>
                  <CancelIcon
                    style={{ cursor: "pointer", color: "red" }}
                    className="ml-auto"
                    onClick={(e) => {
                      removeVariant(varInd);
                    }}
                  />
                </Row>
              )}
              <Row className="mt-3">
                <Col md={8}>
                  <Form.Control
                    onChange={(e) => {
                      textChangeHandlerVariants(e, varInd, "name");
                    }}
                    type="text"
                    className="add-food-input variant-name-input"
                    placeholder="Variant Name"
                    value={value.name}
                  ></Form.Control>
                </Col>
                <Col md={3} className="ml-auto">
                  <Form.Group controlId={"variantImage"+varInd} className="mb-3">
                    <Form.Label className="upload-image">
                      <UploadFileIcon /> Upload Image
                    </Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(event) =>
                        variantImageHandler(
                          event.target.files[0] || null,
                          varInd
                        )
                      }
                      hidden
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Control
                    onChange={(e) => {
                      textChangeHandlerVariants(e, varInd, "price");
                    }}
                    type="text"
                    value={value.price}
                    className="add-food-input variant-price-input"
                    placeholder="Price"
                  ></Form.Control>
                </Col>
                <Col md={3} className="ml-auto">
                  <img
                    src={value.image}
                    className="rounded-circle img-fluid px-4"
                    alt="food"
                  />
                </Col>
              </Row>
            </Container>
          );
        })}
        <Container>
          <Row>
            <Button
              variant="primary"
              className="add-variant-button"
              onClick={addVariant}
            >
              <AddIcon /> Add Variant
            </Button>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="default-button px-5">
        {isEdit?"Update":"Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddFoodPopup;
