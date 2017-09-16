import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ButtonGroup, ButtonToolbar, Panel } from 'react-bootstrap';
import {
    all, compose, contains, either, filter, flatten, head, keys, is, isEmpty, isNil, join, map,
    mergeAll, pick, pluck, reject, toPairs, uniq, values, whereEq } from 'ramda';
import KeyWithFilters from './KeyWithFilters';
import { uiActions } from '../actions';
import store from '../store';

const MetaData = ({ selectedDataset: { fileName, dataset }, showSpinner, filters }) => {
    return (
        !showSpinner &&
        <Panel header={<strong>{fileName}</strong>}>
            <dl className="dl-horizontal">
                <dt>Počet záznamu:</dt>
                <dd>
                    <ul className="list-inline">
                        <li>{dataset.length}</li>
                    </ul>
                </dd>
                <dt>Klíče:</dt>
                <dd>
                    <ul className="list-inline">
                        {(compose(keys, head)(dataset)).map((listItem, index) =>
                            <li key={`${index}`}><em>{listItem}</em></li>)}
                    </ul>
                </dd>
                <dt>Filtry:</dt>
                <dd>
                    <ul className="list-inline">
                        {getFiltarables(dataset).map((listItem, index) =>
                            <li key={`${index}`}>{listItem}</li>)}
                    </ul>
                </dd>
            </dl>
            <ButtonToolbar>
                <ButtonGroup>
                    <Button bsStyle="success" onClick={applyFilters(filters, dataset)}>Aplikovat filtry</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button bsStyle="danger" onClick={clearFilters}>Vymazat filtry</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </Panel >
    );
};

const applyFilters = (filters, dataset) => (event) => {
    const filteredArray = compose(filter(whereEq(mergeAll(filters))))(dataset);
    let formattedArray;
    if (contains('rok', keys(filteredArray[0]))) {
        formattedArray = filteredArray.map(({ rok, hodnota }) => ({ x: new Date(rok, 0), y: hodnota }));
    } else {
        formattedArray = filteredArray.map(({ obdobido, hodnota }) => ({ x: obdobido, y: hodnota }));
    }
    const graphData = [{ name: compose(join(', '), map(values))(filters), values: formattedArray }];
    store.dispatch(uiActions.setGraphData(graphData));
};

const clearFilters = (event) => store.dispatch(uiActions.clearFilters());

const getFiltarables = (dataset) =>
    compose(
        reject(either(isEmpty, isNil)),
        flatten,
        map(([key, value]) => {
            if (is(String, value)) {
                const filterValues = compose(flatten, uniq, map(values), map(pick([key])))(dataset);
                return (<KeyWithFilters keyWithFilter={key} filterValues={filterValues} />);
            }
        }),
        toPairs,
        head
    )(dataset);

MetaData.propTypes = {
    selectedDataset: PropTypes.object,
    showSpinner: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    showSpinner: state.ui.showSpinner,
    filters: state.ui.filters,
});

export default connect(mapStateToProps)(MetaData);