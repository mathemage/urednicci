import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import Spinner from 'react-spinkit';

const ModalSpinner = ({ showSpinner, modalMessage }) =>
    <Modal show={showSpinner}>
        <Modal.Header>
            <Modal.Title>{modalMessage}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center"><Spinner spinnerName="three-bounce" fadeIn="none" /></div>
        </Modal.Body>
    </Modal>;

ModalSpinner.propTypes = {
    modalMessage: PropTypes.string,
    showSpinner: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    showSpinner: state.ui.showSpinner,
    modalMessage: state.ui.modalMessage,
});

export default connect(mapStateToProps)(ModalSpinner);
