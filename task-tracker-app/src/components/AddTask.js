import React from 'react'
import {Form, Col} from "react-bootstrap"

function AddTask() {
  return (
    <form className='add-form'>
      <Col>
          <Form.Group >
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" placeholder="Enter Task" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Date and Time</Form.Label>
            <Form.Control type="text" placeholder="Enter Date and Time" />
          </Form.Group>
        </Col>
      <Col className='form-control-check'>
          <label>Set Reminder</label>
          <input type="checkbox"/>
      </Col>
      <input className='btnn btnn-block' type="submit" value="Add Task"/>
    </form>
  )
}

export default AddTask
