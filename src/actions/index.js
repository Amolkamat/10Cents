import axios from "axios";
import { browserHistory } from 'react-router'
import { Link,withRouter } from "react-router-dom";
import jwtDecode from 'jwt-decode';

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
export const MANUAL_LOGIN = "manual_login";
export const GOOGLE_LOCATION = "google_location"
export const REMOVE_MENU = "remove_menu"
export const SET_CURRENT_USER = "setcurrent_user"
export const GETUSERFROM_STORAGE =  "getuserfrom_storage";
export const LOGOUT_USER = "logout_user";

const API_KEY = "?key=PAPERCLIP1234";


export function setCurrentUser(user) {
	console.log('SET CURRENT USER ACTION');
	console.log(user);
	if(typeof user === typeof undefined)  {
		user =  {
			authenticationFailure: true,
			displayMessage:true
		}
	}
	return {
    type: SET_CURRENT_USER,
    payload: user
  };
}

export function logout() {
    localStorage.removeItem('jwtToken');
		console.log('Logged Out!!')
    return {
        type: LOGOUT_USER
    }
}

export function logoutAndRedirect() {
	console.log('Logging Out!!')
	var user = {}
    return dispatch => {
        dispatch(logout());
    }

}



export function getUserFromStorage() {

	return dispatch => {

	if (localStorage.jwtToken)
	{
		console.log('Token from Local Storage!!');

			if(localStorage.getItem('jwtToken') != 'undefined')
			{
				console.log('Inside Token Setup!')
				console.log(typeof localStorage.getItem('jwtToken') )

				setAuthorizationToken(localStorage.jwtToken);
				dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
			}
			 else {
				 console.log('Outside Token Setup!')
				 localStorage.removeItem('jwtToken');
				 dispatch(setCurrentUser({
		 			authenticationFailure: true,
					displayMessage:false
		 		}));
			 }
	}
	}
	return {
    type: GETUSERFROM_STORAGE,
    payload: []
  }
}


export function manualLogin(data) {
	return dispatch => {
	var request = axios.post('/users/authenticate',data).then(res=>{
		console.log('User Authentication Response');
		console.log(res);
		const token = res.data.token;
		if(typeof token != 'undefined') {
			localStorage.setItem('jwtToken', token);
			setAuthorizationToken(token);
			dispatch(setCurrentUser(jwtDecode(token)));
		}  else {
			dispatch(setCurrentUser());
		}


	})
	}
	return {
		type: 'manual_login',
		payload:[]
	};

}






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

export function updateOrder(placeId,orderId,status) {

		console.log('Update_Order from Front End')
			return (dispatch) => {
					var order = {
						orderId: orderId,
						orderStatus: status
					}
					var request = axios.post('/services/updateOrder/',order).then(function(results){
						if(results) {
							dispatch(fetchOrders(placeId));
						}

					})
				}
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

	var token = localStorage.getItem('jwtToken');

  var request = axios.post(`/services/upload/${placeId}`,file);

  return {
    type: POST_MENU,
    payload: request
  };
}

export function createBusiness(user,callback) {

	return dispatch => {
	var request = axios.post("/users/create",user).then(res=>{
		console.log('User Authentication Response');
		console.log(res);
		const token = res.data.token;

		if(typeof token != 'undefined') {
			localStorage.setItem('jwtToken', token);
			setAuthorizationToken(token);
			dispatch(setCurrentUser(jwtDecode(token)));
		}  else {
			dispatch(setCurrentUser());
		}

	})
	}
  return {
    type: CREATE_BUSINESS,
    payload: request
  };
}

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}


export function sendMessage(message) {
  const request = axios.post("/services/sendMessage",message);

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

export function removeMenuItemFromOrder(orderItem) {
	var request = orderItem;
	console.log('Remove Menu Item');
	console.log(orderItem);
  return {
    type: REMOVE_MENU,
    payload: request
  };
}


export function addPlace(lat,lon) {

  return {
    type: ADD_PLACE,
    payload: {lat:lat,lon:lon}
  }
}

export function getGoogleLocation(latitude,longitude) {

	var request = {
		lat: latitude,
		long:longitude
	}
	console.log('Inside Get Google Location');
    return {
        type: GOOGLE_LOCATION,
        payload: request
    };
}

export function getLocation(address) {
    return (dispatch) => {

        var geocoder = new google.maps.Geocoder();

        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
							var latitude = results[0].geometry.location.lat();
							var longitude = results[0].geometry.location.lng();
                dispatch(getGoogleLocation(latitude,longitude));
            }
        });

    }
}
