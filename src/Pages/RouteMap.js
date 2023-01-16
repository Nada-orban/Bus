import React from 'react'
import GoogleMapReact from 'google-map-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { GiPositionMarker } from 'react-icons/gi'

// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
function RouteMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    //Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }
    }>
      <div className=' p-2 ' >
        <Row>
          <Col md={3}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><GiPositionMarker /></InputGroup.Text>
              <Form.Control
                placeholder="To"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><GiPositionMarker /></InputGroup.Text>
              <Form.Control
                placeholder="From"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>

      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )


}

export default RouteMap


// export class MapContainer extends Component {
  //   render() {
  //     return (
  //       <Map google={this.props.google} zoom={14} style={mapStyles}>

  //         <Marker onClick={this.onMarkerClick}
  //           name={'Current location'} />

  //         <InfoWindow onClose={this.onInfoWindowClose}>

  //         </InfoWindow>
  //       </Map>

  // );


// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };

// export default GoogleApiWrapper({
//   apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(MapContainer)



