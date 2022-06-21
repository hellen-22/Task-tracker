import React ,{ useState } from 'react'
import {Form, Col} from "react-bootstrap"

function AddTask({onAdd}) {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!text){
      alert('Please enter a task')
      return
    }
    onAdd({text, day, reminder})
    
    setText('')
    setDay('')
    setReminder(false)

  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <Col>
          <Form.Group >
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" placeholder="Enter Task" value={text} onChange={(e) => setText(e.target.value) } />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Date and Time</Form.Label>
            <Form.Control type="datetime" placeholder="Enter Date and Time" value={day} onChange={(e) => setDay(e.target.value) } />
          </Form.Group>
        </Col>
      <Col className='form-control-check'>
          <label>Set Reminder</label>
          <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked) }/>
      </Col>
      <input className='btnn btnn-block' type="submit" value="Add Task"/>
    </form>
  )
}

export default AddTask
