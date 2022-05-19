import React, { useContext, useEffect, useState } from "react";
import { Col, Modal, Row, Button, Form, Container } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "./AddFoodPopup.scss";
import { FoodManagementContext } from "./FoodManagement";
import axios from "axios";

function AddFoodPopup(props) {
  const foodManagementContext = useContext(FoodManagementContext);
  const itemID = props.itemID;
  const initialAddOns = [[]];
  const initialFoodState = {
    name: "",
    image:
      "https://media.istockphoto.com/vectors/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-vector-id943483254?k=20&m=943483254&s=612x612&w=0&h=QcqcSxs0OA7BBdsSKkGB1rdA4aExrfPnqa0H14SgiVc=",
    imageFile: "",
    category: "",
    code: "",
    desc: "",
    status: "",
    veg: false,
  };
  const initialVariantsState = {
    default: false,
    name: "",
    image:
      "https://media.istockphoto.com/vectors/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-vector-id943483254?k=20&m=943483254&s=612x612&w=0&h=QcqcSxs0OA7BBdsSKkGB1rdA4aExrfPnqa0H14SgiVc=",
    imageFile: "",
    desc: "",
    price: "",
    sourLevel: 0,
  };

  //States
  const [food, setFood] = useState({ ...initialFoodState });
  const [addOns, setAddOns] = useState([...initialAddOns]);
  const [categories, setCategories] = useState([]);
  const [fieldAddOn, setFieldAddOn] = useState([{ name: "", price: "" }]);
  const [nullState] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [variants, setVariants] = useState([
    { ...initialVariantsState, default: true },
  ]);

  //eslint-disable-next-line
  function addFood() {
    console.log(food);
    console.log(variants);
    // props.onHide(e);
  }

  function handleCategoryChange(event) {
    //eslint-disable-next-line
    const { name, value } = event.target;
    setFood((prevFood) => {
      return { ...prevFood, category: value };
    });
  }

  function addVariant() {
    setAddOns([...addOns, []]);
    setVariants([...variants, initialVariantsState]);
    let temp_field_addOn = [...fieldAddOn];
    temp_field_addOn.push({ name: "", price: "" });
    setFieldAddOn(temp_field_addOn);
  }

  function removeVariant(index) {
    let temp_variants = [...variants];
    temp_variants.splice(index, 1);
    setVariants([...temp_variants]);
    let temp_addOns = [...addOns];
    temp_addOns.splice(index, 1);
    setAddOns(temp_addOns);
    let temp_field_addOn = [...fieldAddOn];
    temp_field_addOn.splice(index, 1);
    setFieldAddOn(temp_field_addOn);
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
    setFood(initialFoodState);
    setVariants([{ ...initialVariantsState, default: true }]);
    setAddOns([...initialAddOns]);
    setFieldAddOn([]);
  }

  //eslint-disable-next-line
  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/api/category");
    setCategories(result.data);
  }, [nullState]);

  useEffect(() => {
    if (typeof itemID != "undefined" && itemID !== -1) {
      setIsEdit(true);
      clearPopup();
      var selectedFood = foodManagementContext.state.itemData.filter(
        (value, index, array) => {
          return value._id === itemID;
        }
      )[0];
      setFood(selectedFood);
      selectedFood.variants && setVariants(selectedFood.variants);
      let addons = [];
      selectedFood.variants.forEach((value, index) => {
        addons.push(value.addons);
        setAddOns(addons);
        setFieldAddOn([...fieldAddOn, { name: "", price: "" }]);
      });
    } else {
      setIsEdit(false);
      setFood(initialFoodState);
      setVariants([{ ...initialVariantsState, default: true }]);
    }
    //eslint-disable-next-line
  }, [props.show]);

  function addonFieldChange(e, varInd, type) {
    let temp_field_addOn = [...fieldAddOn];
    switch (type) {
      case "name":
        temp_field_addOn[varInd].name = e.target.value;
        break;
      case "price":
        !Number.isNaN(Number.parseInt(e.target.value))
          ? (temp_field_addOn[varInd].price = Number.parseInt(e.target.value))
          : (temp_field_addOn[varInd].price = "");
        break;
    }
    setFieldAddOn(temp_field_addOn);
  }

  function addNewAddon(e, varInd, type) {
    let temp_field_addOn = [...fieldAddOn];
    if (e.keyCode === 13) {
      if (temp_field_addOn[varInd].name.trim().length > 0) {
        if (!Number.isNaN(Number.parseInt(temp_field_addOn[varInd].price))) {
          document
            .getElementById("addon-name-" + varInd)
            .classList.remove("error-field-addon");
          document
            .getElementById("addon-price-" + varInd)
            .classList.remove("error-field-addon");
          var temp_addOns = [...addOns];
          temp_addOns[varInd].push(structuredClone(temp_field_addOn[varInd]));
          setAddOns(temp_addOns);
          temp_field_addOn[varInd].name = "";
          temp_field_addOn[varInd].price = "";
        } else {
          document
            .getElementById("addon-price-" + varInd)
            .classList.add("error-field-addon");
        }
      } else {
        document
          .getElementById("addon-name-" + varInd)
          .classList.add("error-field-addon");
      }
    }
    setFieldAddOn(temp_field_addOn);
  }

  function removeAddOn(varInd, addonIndex) {
    let temp_addOns = [...addOns];
    temp_addOns[varInd].splice(addonIndex, 1);
    setAddOns(temp_addOns);
  }

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
          {isEdit ? "Update" : "Add New"} Food Item
        </Modal.Title>
        <CancelIcon onClick={props.onHide} className="order-popup-close-btn" />
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={3}>
            <Form.Control
              as="select"
              className="form-select"
              value={food.category.name}
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
                {/* <Form.Control
                  onChange={(e) => {
                    textChangeHandlerFood(e, "code");
                  }}
                  type="text"
                  className="add-food-input code-input"
                  placeholder="#Code"
                ></Form.Control> */}
              </Col>
              <Col md={8}>
                <Form.Control
                  onChange={(e) => {
                    textChangeHandlerFood(e, "desc");
                  }}
                  as="textarea"
                  value={food.desc}
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
                  <Form.Group
                    controlId={"variantImage" + varInd}
                    className="mb-3"
                  >
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
                <Col md={5}>
                  <Form.Control
                    onChange={(e) => {
                      textChangeHandlerVariants(e, varInd, "desc");
                    }}
                    as="textarea"
                    value={value.desc}
                    className="add-food-input description-input"
                    placeholder="Description"
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
              <Container fluid>
                Addons:
                <Row>
                  <Col xs={9}>
                    <Row>
                      {typeof addOns[varInd] !== "undefined" &&
                        addOns[varInd].map((addon, addonIndex, array) => {
                          return (
                            <Col
                              xs={4}
                              key={addon.id + addon.name}
                              className="p-2 order-popup-variant-checkbox"
                            >
                              {addon.name + ", " + addon.price}
                              <CancelIcon
                                className="ml-2 order-popup-close-btn"
                                onClick={(e) => removeAddOn(varInd, addonIndex)}
                              />
                            </Col>
                          );
                        })}
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row>
                      <Form.Control
                        type="text"
                        placeholder="new addon"
                        className="add-food-input"
                        id={"addon-name-" + varInd}
                        value={
                          typeof fieldAddOn[varInd] !== "undefined"
                            ? fieldAddOn[varInd].name
                            : ""
                        }
                        onChange={(e) => {
                          addonFieldChange(e, varInd, "name");
                        }}
                        onKeyDown={(e) => addNewAddon(e, varInd, "name")}
                      ></Form.Control>
                    </Row>
                    <Row className="mt-2">
                      <Form.Control
                        type="text"
                        placeholder="price"
                        id={"addon-price-" + varInd}
                        className="add-food-input"
                        value={
                          typeof fieldAddOn[varInd] !== "undefined"
                            ? fieldAddOn[varInd].price
                            : ""
                        }
                        onChange={(e) => {
                          addonFieldChange(e, varInd, "price");
                        }}
                        onKeyDown={(e) => addNewAddon(e, varInd, "price")}
                      ></Form.Control>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          );
        })}
        <Container className="mt-4">
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
        <Button
          variant="primary"
          className="default-button px-5"
          onClick={(e) => addFood()}
        >
          {isEdit ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddFoodPopup;
