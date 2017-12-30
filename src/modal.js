import {Modal, ModalHeader, ModalBody } from 'reactstrap';
import React, { Component } from 'react';


class Modalcomp extends Component {
   
  
    render() {
      return (
        <div>
          <Modal isOpen={this.props.modalstate} toggle={this.props.togglefunc} modalTransition={{ timeout: 20 }}>

          <ModalHeader toggle={this.props.togglefunc}>{this.modaltitle}</ModalHeader>

            <ModalBody>
                <div style={{textAlign:'center'}}>

                  {this.props.modalerrortext}
                </div>
            </ModalBody>
       
          </Modal>
        </div>
      );
    }
  }
  
  export default Modalcomp;