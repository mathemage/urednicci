import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { uiActions } from '../actions';
import store from '../store';

const KeyWithFilters = ({ keyWithFilter, filterValues, dataset }) =>
    <DropdownButton bsStyle="info" title={keyWithFilter} id="dropdown">
        {filterValues.map((filterValue, index) =>
            <MenuItem key={`${index}`} onClick={filterBy(dataset, keyWithFilter)}>{filterValue}</MenuItem>)}
    </DropdownButton>;

const filterBy = (dataset, keyWithFilter) => (event) => {
    const filterValue = event.target.innerText;
    store.dispatch(uiActions.addFilters({ [keyWithFilter]: filterValue }));
};

KeyWithFilters.propTypes = {
    dataset: PropTypes.array,
    filterValues: PropTypes.array,
    keyWithFilter: PropTypes.string,
};

const mapStateByProps = (state) => ({
    dataset: state.ui.selectedDataset.dataset,
});

export default connect(mapStateByProps)(KeyWithFilters);