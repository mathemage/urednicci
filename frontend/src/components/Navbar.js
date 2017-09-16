import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar as BSNavbar, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { getFileName, getJsonFromCsv } from '../utils';
import store from '../store';
import { datasetActions, uiActions } from '../actions';

const Navbar = () =>
    <BSNavbar style={{ borderRadius: 0 }}>
        <BSNavbar.Header>
            <BSNavbar.Brand>
                <Link to="/"><i className="fa fa-table" aria-hidden="true" /> Průzkumníček</Link>
            </BSNavbar.Brand>
            <BSNavbar.Toggle />
        </BSNavbar.Header>
	    <Nav>
		    <LinkContainer to="/dashboard/">
			    <NavItem>Dashboard</NavItem>
		    </LinkContainer>
		    <LinkContainer to="/history/">
			    <NavItem>Historie</NavItem>
		    </LinkContainer>
            <NavDropdown title="Oblíbené datové sady" id="nav-dropdown">
                <MenuItem onSelect={_handleOnSelect('../../data/nadej-doziti-2015.csv')}>Naděje dožití</MenuItem>
                <MenuItem onSelect={_handleOnSelect('../../data/navstevnost.csv')}>Návštěvnost</MenuItem>
                <MenuItem onSelect={_handleOnSelect('../../data/012052-17data091517.csv')}>Spotřebitelský košík</MenuItem>
                <MenuItem onSelect={_handleOnSelect('../../data/zemrili-priciny.csv')}>Zemřilí příčiny</MenuItem>
            </NavDropdown>
	    </Nav>
        <Nav pullRight>
            <LinkContainer to="/my-city/">
                <NavItem><strong>Moje město</strong></NavItem>
            </LinkContainer>
	        <LinkContainer to="/profile/">
		        <NavItem><strong>Profil</strong></NavItem>
	        </LinkContainer>
        </Nav>
    </BSNavbar>;

const _handleOnSelect = (pathToCsv) => (event) => {
    store.dispatch(uiActions.clearGraphData());
    store.dispatch(datasetActions.fetchDataset(pathToCsv));
};

export default Navbar;
