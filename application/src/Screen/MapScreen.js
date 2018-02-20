import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Menu from '../Components/Menu.js';


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `620px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 57.999, lng: 56.250 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 57.999, lng: 56.250 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)


const SideBar = function(props) {
  return (
    <div style={styles.primary}>{props.text}</div>
  );
}

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isDangerAlertShowed: true}
    this.toggleDangerAlert = this.toggleDangerAlert.bind(this);
  }

  toggleDangerAlert() {
    this.setState(prevState => ({
      isDangerAlertShowed: !prevState.isDangerAlertShowed
    }));
  }
  showLeft () {
    this.refs.left.show();
  }
  render() {
    
    return (
      <div>        
        <MyMapComponent />     
        <Menu style={styles.actionButton}/>
      </div>
    )
  }
}
const styles = {   
    actionButton:{
        position:'absolute',
        zIndex:11,        
    },   
};

export default MapScreen;
