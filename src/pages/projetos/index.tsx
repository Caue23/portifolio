import { BsLinkedin } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import styles from './projetos.module.scss'

export default function Curriculo() {
    return (
        <div>
            <h1>A nice carousel for any purpose</h1>
            <div className={styles.container}>
                <button className={styles.arrow_left} aria-label="Previous image">◀</button>
                <button className={styles.arrow_right} aria-label="Next Image">▶</button>
                <div className={styles.gallery_wrapper}>
                    <div className={styles.gallery}>
                         <div className={styles.item}></div>
                        <div className={styles.item}></div>
                        <div className={styles.item}></div>
                        <div className={styles.item}></div>
                        <div className={styles.item}></div>
                        <img src="https://source.unsplash.com/random/250x250/?beach" alt="Beach Image" className={styles.item}/>
                            <img src="https://source.unsplash.com/random/250x250/?animal" alt="Animal Image" className={styles.item}/>
                                <img src="https://source.unsplash.com/random/250x250/?street" alt="Street Image" className={styles.item}/>
                                    <img src="https://source.unsplash.com/random/250x250/?zoo" alt="Zoo Image" className={styles.item}/>
                                        <img src="https://source.unsplash.com/random/250x250/?model" alt="Model Image" className={styles.item}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            )
}