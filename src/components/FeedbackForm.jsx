import { useState } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
    const [text,setText] = useState('')
    const [Rating,setRating] = useState(10)
    const [btnDisabled,setBtnDisabled] = useState('true')
    const [message,setMessage] = useState('')
    const handleTextChange = ({ target: { value } }) => {
        if (value === '') {
          setBtnDisabled(true)
          setMessage(null)
          
        } else if (value.trim().length < 10) { 
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
        setText(value)
      }
      
  return (
    <Card>
        <form >
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                <Button type="submit" isDisabled={btnDisabled} >Send </Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm