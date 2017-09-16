import React from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem, Panel } from 'react-bootstrap';
import { either, isEmpty, isNil } from 'ramda';
import { BarChart, LineChart } from 'rd3';

class GraphContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            graphType: 'Čárkový graf',
        };
    }

    _handleClick = (event) => this.setState({ graphType: event.target.innerText });

    render() {
        const {  graphType } = this.state;
        const { name, graphData } = this.props;
        return (
            !either(isEmpty, isNil)(graphData) &&
                <Panel header={<h2>{name ? name : graphData[0].name}</h2>}>
                    <DropdownButton bsStyle="default" title="Přepnout grafy" id="dropdown">
                        <MenuItem onClick={this._handleClick}>Čárkový graf</MenuItem>
                        <MenuItem onClick={this._handleClick}>Sloupcový graf</MenuItem>
                    </DropdownButton>
                    <div className="pull-right">
                    { graphType === 'Čárkový graf' ?
                        <LineChart width={1000} height={500} data={graphData} /> :
                      graphType === 'Sloupcový graf' ?
                          <BarChart width={1000} height={500} data={graphData} /> : null }
                    </div>
                </Panel>
        );
    }
}

export default GraphContainer;