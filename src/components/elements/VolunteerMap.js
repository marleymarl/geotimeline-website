import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
//
import './VolunteerMap.less';

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const mapProps = {
  center: { lat: 40.674, lng: -73.945 },
  zoom: 12,
  disableDefaultUI: true,
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
  const [volunteers, setVolunteers] = useState([{}]);
  // const [webVolunteers, setWebVolunteers] = useState(null);

  useEffect(() => {
    const gtContribUrl =
      'https://api.github.com/repos/marleymarl/geotime/contributors';
    const webContribUrl =
      'https://api.github.com/repos/marleymarl/geotimeline-website/contributors';
    let allVolunteers = [];

    async function getData(url) {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }
    async function getUserData(url, user) {
      // console.log(url && user && `${url}/${user}`);

      let response = await fetch(url && user && `${url}/${user}`);
      let data = await response.json();
      return data;
    }

    getData(gtContribUrl)
      .then(data => {
        const users = data.map(user => {
          return {
            login: user.login,
            id: user.id,
            contributions: user.contributions,
          };
        });

        return users;
      })
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          getProfile(users[i].login);
        }
      });

    getData(webContribUrl)
      .then(data => {
        const users = data.map(user => {
          return {
            login: user.login,
            id: user.id,
            contributions: user.contributions,
          };
        });

        return users;
      })
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          getProfile(users[i].login);
        }
      });

    function getProfile(user) {
      const url = 'https://api.github.com/users';

      getUserData(url, user)
        .then(data => {
          return data;
        })
        .then(data => {
          allVolunteers.push(data);
        });
    }
  });

  return (
    <div className='volunteer-map'>
      <LoadScript id='script-loader' googleMapsApiKey={googleApiKey}>
        <GoogleMap id='map' options={mapProps}></GoogleMap>
      </LoadScript>
    </div>
  );
}

export default VolunteerMap;
