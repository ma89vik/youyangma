
import background from '../resources/background.png'
import sheepImage from '../resources/sheep.png'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

const Sheep = ({date, offset}) => {
    const styles = {
        imgBox: {
            position: 'absolute',
            top: '75%',
            left: '50%',
            marginTop: getRandomInt(-9, 0).toString() + '%',
            marginLeft:offset + '%',
        },
        img: {
            width: "14vw",
            height: "14vw",
        },
        text: {
            position: 'relative',
            left: '-3vw',
            top:'-9.5vw',
            fontSize: '3vw',
            transform: 'rotate(70deg)',
            color: 'red'
        }
    };


    return (
        <div style={styles.imgBox}>
            <img src={sheepImage} style={styles.img} alt="this is sheep" />
            <div style={styles.text}>{date}</div>
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

    const distributeSheeps = (cases) => {
        cases.sort(function (a, b) {
            return ('' + a.date.attr).localeCompare(b.date.attr);
        })
        cases.reverse();

        let sheeps = cases.map( e => {
            return {"date": e.date, "offset": null };
        });

        let sheep_distance = 100 / sheeps.length;
        let offset = -45;

        sheeps.forEach(sheep => {
            sheep.offset = offset;
            offset = Math.max(Math.min(offset + sheep_distance + getRandomInt(-sheep_distance/2, sheep_distance/2), 34), -45);
        });

        return sheeps
    }

    let sheeps = distributeSheeps(cases)

    return (
        <div style={styles.background}>
            <div>
                {sheeps.map(e => <Sheep date={e.date} offset={e.offset} key={e.date} />)}
            </div>

        </div>
    )
}

export default ShowCases
