import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBusiness,displayNotification,getUploadedMenu } from "../actions";
import BusinessDashboardOrder from "./BusinessDashboardOrder"
import BusinessDashboardUpload from "./BusinessDashboardUpload"
import BusinessDashboardProfile from "./BusinessDashboardProfile"
import BusinessDashboardMenuItems from "./BusinessDashboardMenuItems"

class BusinessDashboard extends Component {

  constructor(props) {
    super(props);

  }
  componentWillReceiveProps(nextProps) {
    console.log('Props from Main Dashboard!');
    console.log(nextProps.postedMenu);

    if(nextProps.postedMenu && nextProps.postedMenu.data && nextProps.postedMenu.data.error) {
      console.log('WooHoo');
      console.log(nextProps.uploadedMenu)
      this.props.displayNotification(true,'Authentication Error - Please logOut and login back','delete-item-notification');
    } else if(nextProps.postedMenu) {
      this.props.getUploadedMenu(this.props.business.data.placeId)
      this.props.displayNotification(true,'Menu Items Uploaded - You are all set!','add-item-notification');
    };
  }
render() {

    return (
      <div>
        <div className = "row">
          <div className = "col-md-12" >
            <div className="businessDashboard-cover-left">
              <BusinessDashboardOrder/>
            </div>
          </div>

        </div>
        <div className = "row">
          <div className = "col-md-6" >
      <div className="businessDashboard-cover-middle">
        <BusinessDashboardUpload />
      </div>
      </div>
      <div className = "col-md-6" >
    <div className="businessDashboard-cover-right">
      <BusinessDashboardMenuItems />
    </div>
        </div>



    </div>
        </div>
    );
  }
}

function mapStateToProps({business,postedMenu}) {
  return {business,postedMenu};
}


export default connect(mapStateToProps, { getBusiness,displayNotification,getUploadedMenu})(BusinessDashboard);
