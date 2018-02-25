import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';

const Header = () => (
    <header className="hidden-print">
        <Grid fluid className="no-padding">
            <Row className="top-line-color">
                <Col sm={12}/>
            </Row>
        </Grid>
    </header>
);

export default Header;
