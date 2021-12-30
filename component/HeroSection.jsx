import { Col, Container, Row } from "react-bootstrap"
import styles from '../styles/HeroSection.module.css'
import Image from "next/image"

const HeroSection = () => {
    return (
        <div className={styles.herocontainer}>
            <Container>
                <span>
                    earn Cashback by achieving your &nbsp; <br/>
                </span>

                <span className="animate-text">
                    
                </span>
                <span className="animate">
                    &nbsp;goals
                </span>
            </Container>
        </div>


    )
}

export default HeroSection
