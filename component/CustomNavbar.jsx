import { Container, Navbar , Button} from "react-bootstrap"
import Image from "next/image"


const CustomNavbar = () => {
    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="#home"><Image
                        src="/logo.png"
                        layout="intrinsic"
                        width="350%"
                        height="170%"
                        alt="gferds"

                    /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end mx-5 ">
                        <Navbar.Text>
                            <Button href="https://rzp.io/l/gferds" className="buyButton border-0"  size="lg">
                                <span className="buyNowText">Buy Now</span>
                            </Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar
