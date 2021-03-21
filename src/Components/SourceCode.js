import React, { Component, useState } from "react"
import {
  Accordion,
  Card,
  Form,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap"
import data from "./data.json"

const myObject = {
  one: "one",
  two: "two",
  arr: [1, { nested_1: "nested" }, 3, 4],
  fun_1: function () {
    return "function_1"
  },
  fun_2: function () {
    return "function_2"
  },
  Component: Component,
  useState: useState,
}
class SourceCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elementName: "None",
      elementType: "empty",
      types: {
        number: "number",
        string: "string",
        boolean: "boolean",
        function: "function",
      },
      objectMapping: {
        window: window,
        location: document.location,
        myObject: myObject,
        react: React,
        Accordion: Accordion,
        data: data,
      },
      isSelected: false,
    }
  }

  render() {
    return (
      <div className='container' style={{ marginTop: "50px" }}>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>
          Let's see behind the Code
        </h1>

        <Row className='my-3'>
          <Col>
            <Form.Group controlId='element'>
              <Form.Control
                size='lg'
                as='select'
                onChange={e => {
                  var selectedObject = e.target.value
                  if (selectedObject !== "None") {
                    this.setState({ elementName: selectedObject })
                    this.setState({
                      elementType: typeof this.state.objectMapping[
                        selectedObject
                      ],
                    })
                    this.setState({ isSelected: true })
                  } else {
                    this.setState({ elementName: "None" })
                    this.setState({ elementType: "Empty" })
                  }
                }}
              >
                <option>None</option>
                {Object.keys(this.state.objectMapping).map((key, index_1) => {
                  return <option key={index_1}>{key}</option>
                })}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button
              size='lg'
              variant='dark'
              onClick={() => window.location.reload()}
            >
              Refresh
            </Button>
          </Col>
        </Row>
        {
          <Accordion defaultActiveKey='0' className='mb-5'>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey='0'
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                  {this.state.elementName}
                </span>
                <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                  {this.state.elementType}
                </span>
              </Accordion.Toggle>

              <Accordion.Collapse
                eventKey='0'
                style={{ backgroundColor: "black" }}
              >
                <Card.Body>
                  {this.state.objectMapping[this.state.elementName] &&
                    Object.keys(
                      this.state.objectMapping[this.state.elementName]
                    ).map((key, index_1) => {
                      var element = this.state.objectMapping[
                        this.state.elementName
                      ]
                      var Fun

                      if (this.state.types[typeof element[key]]) {
                        Fun = element[key]
                      }

                      if (typeof Fun === "boolean") {
                        if (Fun) {
                          Fun = "true"
                        } else {
                          Fun = "false"
                        }
                      }
                      var value
                      if (Fun === undefined)
                        value =
                          element[key] !== null
                            ? element[key].toString()
                            : "Object Not Accessible"
                      else if (Fun === "") value = "Empty Value"
                      else {
                        value = Fun
                      }

                      return (
                        <Row key={index_1} className='mb-2'>
                          <Col>
                            <Button
                              variant='dark'
                              style={{
                                fontSize: " 25px",
                              }}
                            >
                              {index_1 + 1}
                              {"     "}
                              {key} :
                              {
                                typeof this.state.objectMapping[
                                  this.state.elementName
                                ][key]
                              }
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              variant={Fun === undefined ? "danger" : "dark"}
                              onClick={() => {
                                if (typeof element[key] === "object") {
                                  var obj = {
                                    ...this.state.objectMapping,
                                  }
                                  obj[key] = element[key]

                                  this.setState({ objectMapping: obj })
                                  this.setState({ elementName: key })
                                  this.setState({
                                    elementType: typeof element[key],
                                  })
                                }
                              }}
                              style={{
                                fontSize: " 25px",
                                width: "inherit",
                              }}
                            >
                              {typeof value === "function"
                                ? value.toString()
                                : value}
                            </Button>
                          </Col>
                        </Row>
                      )
                    })}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        }
      </div>
    )
  }
}
export default SourceCode
