import { Container, Spinner } from "react-bootstrap";

export default function Loading() {
    return (
        <Container className="text-center mt-5">
            <Spinner animation="border" role="status" className="mt-5">
                <span className="visually-hidden ">
                    Loading
                </span>
            </Spinner>

        </Container>
    )
}