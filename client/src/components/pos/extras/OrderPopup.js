import React, { useContext, useEffect, useState } from "react";
import { Col, Modal, Row, Button, Form, Container } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./OrderPopup.scss";
import { POSContext } from "../pos";

function OrderPopup(props) {
  const posContext = useContext(POSContext);
  var baseItem = posContext.state.itemData[props.itemindex];

  //States
  const [items, setItems] = useState([baseItem]);
  const [variants, setVariants] = useState([]);
  const [selectedVariants, setselectedVariants] = useState([]);
  const [addOns, setAddOns] = useState([[]]);
  const [count, setCount] = useState([1]);

  function changeCountItem(i, action) {
    let temp_count = [...count];
    action === "+"
      ? (temp_count[i] = count[i] + 1)
      : count[i] - 1 > 0
      ? (temp_count[i] = count[i] - 1)
      : (temp_count[i] = 1);
    setCount(temp_count);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    setItems([baseItem]);
    setselectedVariants([]);
    typeof baseItem !== "undefined" && setVariants(baseItem.variants);
    setAddOns([]);
  }, [baseItem]);

  useEffect(() => {
    if (items.length === 1) setNewSelectedVariants();
    //eslint-disable-next-line
  }, [variants]);

  useEffect(() => {
    onSelectedVariantsChange(selectedVariants.length - 1);
    //eslint-disable-next-line
  }, [selectedVariants]);

  function onSelectedVariantsChange(index) {
    if (!isEmpty(selectedVariants)) {
      if (typeof selectedVariants[index] !== "undefined") {
        if (selectedVariants[index].addons.length > 0) {
          let temp_addons = [...addOns];
          temp_addons[index] = structuredClone(selectedVariants[index].addons);
          setAddOns(temp_addons);
        } else {
          let temp_addons = [...addOns];
          temp_addons[index] = [];
          setAddOns(temp_addons);
        }
      }
    }
  }

  function addMultipleVariantClicked(event) {
    let temp_state = [...items];
    temp_state.push(baseItem);
    setItems(temp_state);
    let temp_count = [...count];
    temp_count.push(1);
    setCount(temp_count);
    setNewSelectedVariants();
  }

  function variantChangeHandler(e) {
    var [variantID, ind] = e.target.value.split("||");
    var itemIndex = Number.parseInt(ind);
    let temp_selected_variants = [...selectedVariants];
    temp_selected_variants[itemIndex] = getVariantByID(variantID);
    setselectedVariants(temp_selected_variants);
    if (temp_selected_variants[itemIndex].addons.length > 0) {
      let temp_addons = [...addOns];
      temp_addons[itemIndex] = structuredClone(
        temp_selected_variants[itemIndex].addons
      );
      setAddOns(temp_addons);
    } else {
      let temp_addons = [...addOns];
      temp_addons[itemIndex] = [];
      setAddOns(temp_addons);
    }
  }

  function getVariantByID(variantID) {
    //eslint-disable-next-line
    return variants.filter((value, index, array) => {
      if (value._id === variantID) return value;
    })[0];
  }

  function removeItem(index) {
    if (index > 0) {
      let temp_items = [...items];
      temp_items.splice(index, 1);
      setItems(temp_items);

      let temp_selected_variants = [...selectedVariants];
      temp_selected_variants.splice(index, 1);
      setselectedVariants(temp_selected_variants);

      let temp_count = [...count];
      temp_count.splice(index, 1);
      setCount(temp_count);

      let temp_addons = [...addOns];
      temp_addons.splice(index, 1);
      setAddOns(temp_addons);
    }
  }

  function setNewSelectedVariants() {
    if (typeof getDefaultVariant() !== "undefined") {
      let temp_selected_variants = [...selectedVariants];
      temp_selected_variants.push(getDefaultVariant());
      setselectedVariants(temp_selected_variants);
    }
  }

  function getDefaultVariant() {
    //eslint-disable-next-line
    if (typeof variants !== "undefined")
      return variants.filter((value) => {
        if (value.default === true) return value;
      })[0];
  }

  function addToBillClicked(e) {
    const newBillItem = [];
    for (var i = 0; i < items.length; i++) {
      newBillItem.push({
        image: items[i].image,
        count: count[i],
        name: items[i].name,
        price: items[i].price,
        variant: selectedVariants[i],
        extras:
          typeof addOns[i] !== "undefined" &&
          addOns[i].filter((value) => {
            return value.selected;
          }),
      });
    }
    posContext.dispatch({ type: "addbillItems", value: newBillItem });
    // console.log(posContext.state.billItems);
    posContext.dispatch({ type: "updateBillPrices" });
    props.onHide(e);
  }

  function checkHandler(item, i) {
    const temp_state = [...addOns];
    temp_state[item][i].selected = !temp_state[item][i].selected;
    setAddOns(temp_state);
  }

  function getAddOnsPriceSum(addons) {
    var sum = 0;
    if (typeof addons !== "undefined" && addons.length > 0) {
      for (var i = 0; i < addons.length; i++) {
        sum += addons[i].selected ? addons[i].price : 0;
      }
    }
    return sum;
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
          Add Food To Cart
        </Modal.Title>
        <CancelIcon onClick={props.onHide} className="order-popup-close-btn" />
      </Modal.Header>
      <Modal.Body>
        {items.map((itemInside, itemIndex) => {
          if (typeof itemInside != "undefined")
            return (
              <Row key={itemInside._id + "-item-" + itemIndex}>
                <Row className="order-popup-item-row">
                  <Col xs={2}>
                    <img
                      src={
                        typeof selectedVariants[itemIndex] !== "undefined"
                          ? selectedVariants[itemIndex].image
                          : itemInside.image
                      }
                      alt="item"
                      className="img-fluid rounded-circle"
                      style={{ padding: 10 }}
                    />
                  </Col>
                  <Col xs={3} className="my-auto">
                    <span className="order-popup-item-name">
                      {itemInside.name}
                    </span>
                  </Col>
                  <Col xs={2} className="my-auto">
                    <Form.Select
                      aria-label="Default select"
                      className="order-popup-item-dropdown"
                      title={
                        typeof selectedVariants[itemIndex] !== "undefined"
                          ? selectedVariants[itemIndex].desc.toString()
                          : ""
                      }
                      onChange={(e) => {
                        variantChangeHandler(e);
                      }}
                    >
                      {typeof variants !== "undefined" &&
                      variants.length > 0 ? (
                        variants.map((value, index, array) => {
                          return (
                            <option
                              key={value._id + index + value.name}
                              value={value._id + "||" + itemIndex}
                            >
                              {value.name}
                            </option>
                          );
                        })
                      ) : (
                        <option value="1">Default</option>
                      )}
                    </Form.Select>
                  </Col>
                  <Col xs={2} className="px-4 my-auto">
                    <span
                      className="order-popup-item-count"
                      style={{ alignItems: "center" }}
                    >
                      <RemoveCircleOutlineIcon
                        className="order-popup-in-out mr-2"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          changeCountItem(itemIndex, "-");
                        }}
                      />
                      {count[itemIndex]}
                      <AddCircleOutlineIcon
                        className="order-popup-in-out ml-2"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          changeCountItem(itemIndex, "+");
                        }}
                      />
                    </span>
                  </Col>
                  <Col xs={3} className="my-auto">
                    <Row>
                      <Col xs={7}>
                        {typeof selectedVariants[itemIndex] !== "undefined"
                          ? getAddOnsPriceSum(addOns[itemIndex]) +
                            selectedVariants[itemIndex].price * count[itemIndex]
                          : () => {}}
                      </Col>
                      <Col xs={2}>
                        {itemIndex > 0 ? (
                          <HighlightOffIcon
                            style={{ cursor: "pointer" }}
                            onClick={(e) => removeItem(itemIndex)}
                            className="mr-auto order-popup-cancel-icon"
                          />
                        ) : (
                          ""
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {typeof addOns[itemIndex] !== "undefined" &&
                addOns[itemIndex].length > 0 ? (
                  <Container className="mt-4">
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Add-Ons
                    </span>
                    <Form>
                      <Container className="m-4">
                        <Row>
                          {addOns[itemIndex].map((addon, addonIndex, array) => {
                            return (
                              <Col
                                xs={4}
                                key={addon._id + addonIndex}
                                className="p-2 order-popup-variant-checkbox"
                              >
                                <Form.Check
                                  type={"checkbox"}
                                  id={`addon` + itemIndex + "_" + addonIndex}
                                  checked={addon.selected}
                                  onChange={(e) => {
                                    checkHandler(itemIndex, addonIndex);
                                  }}
                                  label={addon.name}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </Container>
                    </Form>
                  </Container>
                ) : (
                  ""
                )}
              </Row>
            );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={(e) => {
            addMultipleVariantClicked(e);
          }}
          className="default-button order-popup-bottom-button"
        >
          Add Multiple Variant
        </Button>
        <Button
          onClick={addToBillClicked}
          className="default-button order-popup-bottom-button"
        >
          Add To Bill
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderPopup;
