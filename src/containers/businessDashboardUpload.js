import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Dropzone from 'react-dropzone'
import { postMenu,displayNotification,getUploadedMenu } from "../actions";

class BusinessDashboardUpload extends Component {
  componentDidMount() {

  }
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {


    var photo = new FormData();
  photo.append('photo', files[0]);

  this.props.postMenu(photo,this.props.business.data.placeId);
  /*this.props.displayNotification(true,'Menu Items Uploaded - You are all set!','add-item-notification');
    this.setState({
      files
    }); */

  }
  displayBusinessAddress() {

    return (
      <h3> {this.props.business.data.address}</h3>
    )
  }

  render() {

    if(!this.props.business) {
      return (
        <div> Loading...</div>
      )
    } else {
      return (
        <div>
        <section>
          <div className = "text-center" >


          <h3 className="dashboardHeader"> Upload Menu Items </h3>
         <div className="dropzone">
                   <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>

           </Dropzone>
         </div>

         </div>
       </section>

        </div>);
    }



  }
}


function mapStateToProps({business}) {
  return { business };
}



export default connect(mapStateToProps, { postMenu,displayNotification,getUploadedMenu})(BusinessDashboardUpload);
