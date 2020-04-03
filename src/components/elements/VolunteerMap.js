import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
//
import './VolunteerMap.less';

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
};

const defaultProps = {
  center: { lat: 40.674, lng: -73.945 },
  zoom: 12,
  styles: [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }],
    },
  ],
};
function VolunteerMap(props) {
  const { google } = props;
  const [volunteers, setVolunteers] = useState(null);

  useEffect(() => {
    const url = 'https://api.github.com/repos/marleymarl/geotime/contributors';
    async function getProjectVolunteers(url) {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }
    getProjectVolunteers(url).then(data => console.log(data));
  });
  // console.log(volunteers);

  // createRef(Map);
  return (
    <div className='volunteer-map'>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: googleApiKey,
})(VolunteerMap);
