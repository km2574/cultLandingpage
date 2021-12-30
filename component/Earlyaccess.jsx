import { Container } from "react-bootstrap"
import styles from "../styles/Earlyaccess.module.css"

const Earlyaccess = () => {
    return (
        <Container className="custom mt-6 d-flex justify-content-center">
            <form className="custom-from" action="/action_page.php">
                <input className={`rounded-2 border-1 p-3 h5 ${styles.input}`} type="tel" id="phone" name="phone" placeholder="Enter phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                &#160;&#160;
                <input className="custom-button rounded-2  border-0 px-5 pt-3 pb-3 h5 mb-5" type="submit"  value="Get Early Access" />
            </form>
        </Container>
    )
}

export default Earlyaccess
