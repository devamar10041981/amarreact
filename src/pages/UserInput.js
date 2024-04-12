import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"

const UserInput = ({searchQuery,searchFunction, handleInputChange}) => {

    return (
        <Row>
            <Col>
                <div className="ms-3 fs-2 text-left">Custom User</div>
            </Col>
            <Col className="mt-2 w-50 flex justify-content-end"><InputGroup >
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-search" value={searchQuery} onChange={handleInputChange}
                />
                <Button variant="outline-primary" id="button-search" onClick={searchFunction}>
                    Search
                </Button>
            </InputGroup>
            </Col>
        </Row>
    )
}

export default UserInput