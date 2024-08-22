import NavbarComponent from "../components/Navbar";
import { QuizQuestion } from "../data/Data";
import {Container} from "react-bootstrap";
import QuizComponent from "../components/Quiz/QuizComponent";

const Quiz = () => {
  return (
    <div>
        <NavbarComponent/>
      <Container>
        <QuizComponent questions = {QuizQuestion.questions}/>
      </Container>
    </div>
  )
}

export default Quiz
