import React, { Component } from "react";
import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import API from "../utils/API";

class PictureContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    // componentDidMount() {
    // }
    // searchImage = query => {
    //     API.search(query)
    //     .then(res => this.setState({ result: res.data }))
    //     .catch(err => console.log(err));
    // }

    render() {
        return (
            <Container>
                
                {/* <Row>
                    <Col>
                        <Card>

                        </Card>
                    </Col>
                </Row> */}
            </Container>
        )
    }
}

export default PictureContainer;