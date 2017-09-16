import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Image, PageHeader, Row } from 'react-bootstrap';
import { Metadata } from '../components';
import { either, isEmpty, isNil } from 'ramda';
import { datasetActions } from '../actions';
import store from '../store';
import GraphContainer from './GraphContainer';

class Dashboard extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        if (either(isEmpty, isNil)(this.props.selectedDataset)) {
            store.dispatch(datasetActions.fetchDataset('../../data/012052-17data091517.csv'));
        }
    }

    render() {
        const { selectedDataset, graphData } = this.props;
        return (
            <Grid>
                <Row>
                    <PageHeader>
                        <Image src={require('./bot-small.png')} /> Vizualizace data <small>{selectedDataset && selectedDataset.fileName}</small><div className="clearfix" />
                    </PageHeader>
                </Row>
                <Row>
                    {selectedDataset && <Metadata selectedDataset={selectedDataset} />}
                </Row>
                <Row>
                    {graphData && <GraphContainer graphData={graphData} />}
                </Row>
            </Grid>
        );
    }
}

Dashboard.propTypes = {
    graphData: PropTypes.array,
    selectedDataset: PropTypes.object,
};

const mapStateToProps = (state) => ({
    graphData: state.ui.graphData,
    selectedDataset: state.ui.selectedDataset,
});

export default connect(mapStateToProps)(Dashboard);
