import React from 'react';
import { Grid, Image, ListGroup, ListGroupItem, PageHeader, Row } from 'react-bootstrap';
import { toPairs } from 'ramda';
import GraphContainer from './GraphContainer';
import { caslavProfile1 } from '../store';

export default class MyCity extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>
                        <Image src={require('./bot-small.png')} /> Moje město<div className="clearfix" />
                    </PageHeader>
                </Row>
                <Row>
                    {caslavProfile1
                        .map(toPairs)
                        .map(([pair]) => {
                            const [name, graphData] = pair;
                            return <GraphContainer name={name} graphData={graphData} />;
                        })
                    }
                </Row>
            </Grid>
        );
    }
}