import React from 'react';
import { Content, ModalSpinner, Navbar } from '../components';

export default class Layout extends React.Component {

    render() {
    	return (
		    <div>
                <ModalSpinner />
			    <Navbar />
			    <Content />
		    </div>
	    );
    }
}
