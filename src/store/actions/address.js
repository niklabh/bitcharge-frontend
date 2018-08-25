import {
  ADD_ADDRESS,
  FETCH_ADDRESSES,
  UPDATE_ADDRESS,
  DELETE_ADDRESS
} from '../constants'

const fetchAddresses = () => {
  return {
    type: FETCH_ADDRESSES
  }
}

const addAddress = (address) => {
  return {
    type: ADD_ADDRESS,
    payload: {
      address
    }
  }
}

const updateAddress = (address) => {
  return {
    type: UPDATE_ADDRESS,
    payload: {
      address
    }
  }
}

const deleteAddress = (address) => {
  return {
    type: DELETE_ADDRESS,
    payload: {
      address
    }
  }
}

export {
  fetchAddresses,
  addAddress,
  updateAddress,
  deleteAddress
}
