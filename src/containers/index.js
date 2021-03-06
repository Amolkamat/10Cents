import axios from "axios";

export const FETCH_BUSINESS = "fetch_business";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";
export const ADD_PLACE = "add_place";
export const FETCH_RESTAURANTS = "fetch_restaurants";
export const GET_MENU = "get_menu";
export const SEND_MESSAGE = "send_message";
export const ADD_MENU = "add_menu";
export const CREATE_BUSINESS = "create_business";
export const POST_MENU = "post_menu";
export const GET_BUSINESS = "get_business";


const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

export function getBusiness(id) {
  var request = axios.get(`/business/get/${id}`).then((response) => console.log(response));

  return {
    type: GET_BUSINESS,
    payload: request
  };
}

export function postMenu(file) {

  var request = axios.post("/upload",file).then((response) => console.log(response.data.Sheet1));

  return {
    type: POST_MENU,
    payload: request
  };
}

export function createBusiness(user,callback) {
  const request = axios.post("/business/create",user).then((response) => callback(response));

  return {
    type: CREATE_BUSINESS,
    payload: request
  };
}


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
      name: 'Coffee Shop',
      price: 5.00
    },
    {
      id: 2,
      name: 'Tea Shop',
      price: 3.25
    },
    {
      id: 3,
      name: 'Google Shop',
      price: 3.50
    },
    {
      id: 4,
      name: 'Donut',
      price: 1.50
    },
    {
      id: 5,
      name: 'Candy',
      price: 5.50
    },
    {
      id: 6,
      name: 'Choco Drink',
      price: 6.60
    },
    {
      id: 7,
      name: 'Peanut Butter',
      price: 3.50
    },
    {
      id: 8,
      name: 'Chicken Burger',
      price: 8.75
    },
    {
      id: 9,
      name: 'Milk Shake',
      price: 1.00
    },
    {
      id: 10,
      name: 'Bread',
      price: 1.30
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
      name: 'Coffee Shop',
      price: 5.00
    },
    {
      id: 2,
      name: 'Tea Shop',
      price: 3.25
    },
    {
      id: 3,
      name: 'Google Shop',
      price: 3.50
    },
    {
      id: 4,
      name: 'Donut',
      price: 1.50
    },
    {
      id: 5,
      name: 'Candy',
      price: 5.50
    },
    {
      id: 6,
      name: 'Choco Drink',
      price: 6.60
    },
    {
      id: 7,
      name: 'Peanut Butter',
      price: 3.50
    },
    {
      id: 8,
      name: 'Chicken Burger',
      price: 8.75
    },
    {
      id: 9,
      name: 'Milk Shake',
      price: 1.00
    },
    {
      id: 10,
      name: 'Bread',
      price: 1.30
    }
  ]
  return {
    type: GET_MENU,
    payload: request
  };
}

export function addMenuToOrder(item,qty) {
  console.log('Menu Item Added');
  console.log(qty)
  var request = {
    id: item.id,
    name: item.name,
    quantity: qty,
    price: item.price
  }
  return {
    type: ADD_MENU,
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
