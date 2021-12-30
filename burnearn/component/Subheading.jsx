import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "../styles/Subheading.module.css"

export const Subheading = () => {
    return (
        <Container className='text-center text-white mt-5 display-6 mb-5'>
            <span className={styles.paragit remote add origin https://github.com/km2574/cultLandingpage.git}>
            Create your personalized program with weekly nutrition and exercise goals by talking with a <span className={styles.coach}>Certified Coach</span>.

            </span>
        </Container>
    )
}
