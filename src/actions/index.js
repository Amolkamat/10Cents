import axios from "axios";

export const FETCH_BUSINESS = "fetch_business";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";
export const ADD_PLACE = "add_place";
export const FETCH_RESTAURANTS = "fetch_restaurants"
export const GET_MENU = "get_menu"
export const SEND_MESSAGE = "send_message"

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

export function sendMessage() {
  const request = axios.get("/api/sendMessage");

  return {
    type: SEND_MESSAGE,
    payload: request
  };
}

export function fetchBusiness() {
  //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = [
    {
      id: 1,
      name: 'Coffee Shop'
    },
    {
      id: 2,
      name: 'Tea Shop'
    },
    {
      id: 3,
      name: 'Google Shop'
    }
  ]
  return {
    type: FETCH_BUSINESS,
    payload: request
  };
}

export function getMenuItems() {
  const request = [
    {
      id: 1,
      name: 'Menu Coffee'
    },
    {
      id: 2,
      name: 'Menu Tea'
    },
    {
      id: 3,
      name: 'Menu Google'
    }
  ]
  return {
    type: GET_MENU,
    payload: request
  };
}


export function addPlace(lat,lon) {

  return {
    type: ADD_PLACE,
    payload: {lat:lat,lon:lon}
  }
}

export function setNearbySearchResult(results,status) {


    return {
        type: FETCH_RESTAURANTS,
        payload: {results,status}
    };
}

export function fetchRestaurants(lat = '40.3324413', lon = '-74.5589624') {
    return (dispatch) => {
        console.log('Here Mane');
        var currentLocation = new google.maps.LatLng('40.3324413' , '-74.5589624');
        var request = {
            location: currentLocation,
            radius: '4000',
            types: ['service']
        };
        var service = new google.maps.places.PlacesService(map);
        console.log(request)
        service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setNearbySearchResult(results,status));
            }
        });

    }
}



export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
