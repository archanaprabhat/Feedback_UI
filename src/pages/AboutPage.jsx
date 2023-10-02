import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
   <Card>
    <div className="about">
        <h1>About this Project</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quibusdam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptate nisi quod amet eius fugit atque. Beatae amet rem, nam culpa doloribus saepe odit sed, hic, nisi quibusdam minima qui.</p>
        <p>
                <Link to="/">Back to Home</Link>
        </p>
    </div>
    </Card>
  )
}

export default AboutPage
