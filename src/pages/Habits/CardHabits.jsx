import { Card, CardText, CardButtons } from './styles';
import Button from '../../components/button/Button';

const CardHabits = () => {
    return (
        <Card>
            <CardText>
                <p className="titleCard">{"Title"}</p>
                <p className="infoCard">Category: <span className="categoryInfo">{"teste categoria"}</span></p>
                <p className="infoCard">Frequency  <span className="frequencyInfo">{"teste frequencia"}</span></p>
            </CardText>
            <CardButtons>
                <Button
                    setColor={'var(--blue)'}
                    setSize={'medium'}
                    // click={() => }
                >Update</Button>
                <Button
                    setColor={'var(--red)'}
                    setSize={'medium'}
                    // click={() => }
                >Delete</Button>
            </CardButtons>    
        </Card>
    )
}

export default CardHabits;