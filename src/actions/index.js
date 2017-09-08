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
export const DISPLAY_NOTIFICATION = "display_notification";
export const FETCH_ORDERS = "fetch_orders";
export const VALIDATE_SHOP = "validate_shop";
export const UPLOADED_MENU = "uploaded_menu";

const API_KEY = "?key=PAPERCLIP1234";

export function getUploadedMenu(id) {

  var request = axios.get(`/business/get/${id}`);

  return {
    type: UPLOADED_MENU,
    payload: request
  };
}


export function validateShop(placeId,callback) {

      var request = axios.get(`/services/validateShop/${placeId}`).then((response) => callback(response));

  return {
    type: VALIDATE_SHOP,
    payload: request
  };
}



export function fetchOrders(placeId,startDate) {
      var request = axios.get(`/services/fetchOrders/${placeId}`);

  return {
    type: FETCH_ORDERS,
    payload: request
  };
}


export function displayNotification(showNotification, notificationText,notificationType) {
    var request = {
      show: showNotification,
      text: notificationText,
      type: notificationType
    }

  return {
    type: DISPLAY_NOTIFICATION,
    payload: request
  };
}


export function purchaseOrder(placeId,order) {

  var request = axios.post(`/services/createOrder/${placeId}`,order);
  console.log('Inside Purchase Menu ');
  console.log(request);

  return {
    type: POST_MENU,
    payload: request
  };
}


export function getBusiness(id) {

  var request = axios.get(`/business/get/${id}`);

  return {
    type: GET_BUSINESS,
    payload: request
  };
}

export function postMenu(file,placeId,callback) {

  var request = axios.post(`/upload/${placeId}`,file).then(() => callback());


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

export function getMenuItems(placeId) {
  var request = axios.get(`/business/get/${placeId}`);
    console.log('Axios GET MENU ACTION');
    console.log(request);
  return {
    type: GET_MENU,
    payload: request
  };
}

export function addMenuToOrder(item,qty) {
  var request = {
    id: item.id,
    name: item.item,
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
