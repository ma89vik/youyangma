
import background from '../resources/background.png'
import sheepImage from '../resources/sheep.png'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

const Sheep = ({date}) => {
    const styles = {
        width: "8em",
        height: "8em",
        position: 'absolute',
        top: '75%',
        left: '50%',
        marginTop: getRandomInt(-3, 1).toString() + '%',
        marginLeft:getRandomInt(-40, 40).toString() + '%',
    }

    console.log('place sheep at ' + styles.marginTop);
    console.log('date ' + date);

    return (
        <div>
            <img src={sheepImage} style={styles} alt="this is sheep" />
        </div>
    )
};



const ShowCases = ({cases}) => {
    const styles = {
        background: {
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        },
    };

    return (
        <div style={styles.background}>
            <div>
                {cases.map(e => <Sheep date={e.date} key={e.date} />)}
            </div>

        </div>
    )
}

export default ShowCases
