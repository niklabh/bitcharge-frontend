import {
  FETCH_ADDRESSES_LOADING,
  FETCH_ADDRESSES_SUCCESS,
  ADD_ADDRESS_SUCCESS,
  FETCH_ADDRESSES_ERROR,
  UPDATE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_ERROR,
  DELETE_ADDRESS_SUCCESS
} from '../constants'

const initialState = {
  isLoading: false,
  addressList: {},
  isError: false
}

const fetchAddresses = (addresses) => {
  let addressState = {}

  addresses.forEach(address => {
    addressState[address.address] = address
  })

  return addressState
}

const updateAddress = (address, addressState) => {
  const key = address.address
  let updatedAddressState = {
    ...addressState
  }
  updatedAddressState[key] = address

  return updatedAddressState
}

const addAddress = (address, addressState) => {
  let addedAddressState = {
    ...addressState
  }

  addedAddressState[address.address] = address
}

const deleteAddress = (address, addressState) => {
  let deletedAddressState = {
    ...addressState
  }

  delete deletedAddressState[address.address]
}

const address = (state = initialState, action) => {
  const { type, payload } = action
  console.log('payload', type, payload)

  switch (type) {
    case FETCH_ADDRESSES_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_ADDRESSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addressList: fetchAddresses(payload.addresses)
      }

    case FETCH_ADDRESSES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }

    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        addressList: addAddress(payload.address, state.addressList)
      }

    case UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        addressList: updateAddress(payload.address, state.addressList)
      }

    case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        addressList: deleteAddress(payload.address, state.addressList)
      }

    case DELETE_ADDRESS_ERROR:
      return {
        ...state,
        isError: true
      }

    default:
      return state
  }
}

export default address
