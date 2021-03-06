import { API_BASE_URL } from '../../config';

export function getGroceriesFromDB(token) {
  return fetch(`${API_BASE_URL}/groceries`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((data) => {
    return data.groceries;
  });
}

export function addGroceryToDB(token, itemName) {
  return fetch(`${API_BASE_URL}/groceries/add`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      itemName: `${itemName}`
    })
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((data) => {
    return data;
  });
}

export function toggleCheckedInDB(token, itemID, checked) {
  // POST request to /groceries endpoint
  return fetch(`${API_BASE_URL}/groceries/update`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      itemID,
      checked
    })
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((data) => {
    return data;
  });
}

export function removeCheckedInDB(token) {
  // POST request to /groceries endpoint
  return fetch(`${API_BASE_URL}/groceries/delete`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.status;
  });
}

export function deleteItemInDB(token, itemID) {
  // POST request to /groceries endpoint
  return fetch(`${API_BASE_URL}/groceries/delete/${itemID}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return itemID;
  });
}
