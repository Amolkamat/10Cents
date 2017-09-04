import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";



import Dropzone from 'react-dropzone'
import { postMenu } from "../actions";

class BusinessSetup extends Component {
  componentDidMount() {

  }
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {


    var photo = new FormData();
  photo.append('photo', files[0]);
  console.log('Display Business Id');
  console.log(this.props.business.data.placeId)
  this.props.postMenu(photo,this.props.business.data.placeId);
    this.setState({
      files
    });

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

          <h1> Welcome John Snow!</h1>

           {this.displayBusinessAddress()}

          <section>
         <div className="dropzone">
           <Dropzone onDrop={this.onDrop.bind(this)}>
             <p>Try dropping some files here, or click to select files to upload.</p>
           </Dropzone>
         </div>
         <aside>
           <h2>Dropped files</h2>
           <ul>
             {
               this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
             }
           </ul>
         </aside>
       </section>

        </div>);
    }



  }
}


function mapStateToProps({business}) {
  return { business };
}



export default connect(mapStateToProps, { postMenu})(BusinessSetup);
