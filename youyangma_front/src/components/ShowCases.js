
import sheepImage from '../resources/sheep.png'
import sheepSound from '../resources/sheep_sound.mp3'
import { useState, useEffect } from 'react'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

const Sheep = ({date, offset, delay_ms}) => {
    const styles = {
        imgBox: {
            position: 'absolute',
            top: '75%',
            left: '50%',
            marginTop: getRandomInt(-15, 0).toString() + '%',
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

    const [hideSheep, setHideSheep] = useState(true)


    const showSheep = () => {
        setHideSheep(false);
        let audio = new Audio(sheepSound);
        audio.play();
    }

    console.log("Set timeout "+ delay_ms);

    useEffect( () => {
        setTimeout(showSheep, delay_ms);
    }, [delay_ms])

    return (
        <div style={styles.imgBox} hidden={hideSheep}>
            <img src={sheepImage} style={styles.img} alt="this is sheep" />
            <div style={styles.text}>{date}</div>
        </div>
    )
};



const ShowCases = ({cases, background}) => {

    if (!cases) {
        return null
    }


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

        let sheeps = cases.map( e => {
            return {"date": e.date, "offset": null, "delay_ms": 0 };
        });

        let sheep_distance = 100 / sheeps.length;
        let offset = -45;

        const max_delay = 5000;
        let delay = 1000;
        const delay_step = (max_delay -delay) / sheeps.length;

        sheeps.forEach(sheep => {
            sheep.offset = offset;
            offset = Math.max(Math.min(offset + sheep_distance + getRandomInt(-sheep_distance/2, sheep_distance/2), 34), -45);

            sheep.delay_ms = delay
            delay = delay + delay_step
        });

        return sheeps
    }

    let sheeps = distributeSheeps(cases)

    return (
        <div style={styles.background}>
            <div>
                {sheeps.map(e => <Sheep date={e.date} offset={e.offset} key={e.date} delay_ms={e.delay_ms} />)}
            </div>

        </div>
    )
}

export default ShowCases
