import React from 'react';
import { Grid, Image, ListGroup, ListGroupItem, PageHeader, Row } from 'react-bootstrap';

export default class History extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>
                        <Image src={require('./bot-small.png')} /> Historie<div className="clearfix" />
                    </PageHeader>
                </Row>
                <Row>
                    <ListGroup>
                        <ListGroupItem>
                        <div className="pull-left">
                            <dl className="dl-horizontal">
                                <dt>Datová sada:</dt>
                                <dd>012052-17data091517.csv</dd>
                                <dt>Filtry:</dt>
                                <dd>reprcen_txt: Máslo čerstvé [1 kg], uzemi_txt: Hlavní město Praha</dd>
                            </dl>
                        </div>
                        <div className="pull-right">
                            <strong>16.09.2017</strong>
                        </div>
                        <div className="clearfix" />
                    </ListGroupItem>
                        <ListGroupItem>
                            <div className="pull-left">
                                <dl className="dl-horizontal">
                                    <dt>Datová sada:</dt>
                                    <dd>012052-17data091517.csv</dd>
                                    <dt>Filtry:</dt>
                                    <dd>reprcen_txt: Máslo čerstvé [1 kg], uzemi_txt: Pardubický kraj</dd>
                                </dl>
                            </div>
                            <div className="pull-right">
                                <strong>16.09.2017</strong>
                            </div>
                            <div className="clearfix" />
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="pull-left">
                                <dl className="dl-horizontal">
                                    <dt>Datová sada:</dt>
                                    <dd>012052-17data091517.csv</dd>
                                    <dt>Filtry:</dt>
                                    <dd>reprcen_txt: Šunkový salám [1 kg], uzemi_txt: Pardubický kraj</dd>
                                </dl>
                            </div>
                            <div className="pull-right">
                                <strong>16.09.2017</strong>
                            </div>
                            <div className="clearfix" />
                        </ListGroupItem>
                    </ListGroup>
                </Row>
            </Grid>
        );
    }
}