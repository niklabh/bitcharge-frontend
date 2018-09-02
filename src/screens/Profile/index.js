import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import Select from 'react-select'
import QRCode from 'qrcode.react'

import API from '../../api'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'

import SingleValue from './SingleValue'
import DropdownItem from './DropdownItem'

import styles from './styles'
import { colors } from '../../styles'

const selectStyles = {
  control: base => ({ ...base, ...styles.selectStyle }),
  container: base => ({ ...base, width: '100%' }),
  indicatorsContainer: base => ({ ...base, transition: 'all 0.3s ease-out' }),
  indicatorSeparator: base => ({ ...base, backgroundColor: '#FFF' }),
  dropdownIndicator: base => ({ ...base, color: '#000' }),
  menu: base => ({ ...base, marginTop: '1px', border: 0, borderRadius: 0 }),
  option: base => ({ ...styles.dropdownItemStyle }),
  singleValue: base => ({ ...styles.singleValueStyle }),
  valueContainer: base => ({ ...base, padding: 0 })
}

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      isError: false,
      user: null,
      selectedAddress: null
    }
  }

  async componentDidMount () {
    try {
      const data = await API.getProfile(this.props.match.params.username)
      this.setState({ isLoading: false, user: data })
    } catch (e) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  onDropdownItemPress = (value) => {
    this.setState({ selectedAddress: value })
  }

  _renderCardBody = (addresses) => {
    const { selectedAddress } = this.state

    if (!addresses || !addresses.length) {
      return (
        <Container style={styles.cardBodyContainer}>
          <Container fluid style={styles.bodyDataContainer}>
            <Container style={styles.addressContainer}>
              <Text tag='h6'>This user has not addded any addresses.</Text>
            </Container>
          </Container>
        </Container>
      )
    }

    const addressList = Object.keys(addresses).map(address => addresses[address]).sort((a, b) => {
      const textA = a.currency.name.toUpperCase()
      const textB = b.currency.name.toUpperCase()

      return textA.localeCompare(textB)
    })

    const addressText = selectedAddress ? selectedAddress.address : addresses[0].address
    return (
      <Container style={styles.cardBodyContainer}>
        <Select
          options={addressList}
          defaultValue={addressList[0]}
          isSearchable={false}
          components={{ Option: DropdownItem, SingleValue }}
          getOptionLabel={({ currency }) => currency.name}
          getOptionValue={({ currency }) => currency.symbol}
          styles={selectStyles}
          onChange={this.onDropdownItemPress}
        />
        <Container fluid style={styles.bodyDataContainer}>
          <Container style={styles.addressContainer}>
            <Text tag='h5' style={styles.addressHeaderStyle}>Wallet Address</Text>
            <Text tag='h6'>{addressText}</Text>
          </Container>
          <Container style={styles.qrcodeContainer}>
            <QRCode value={addressText} size={172} />
          </Container>
        </Container>
      </Container>
    )
  }

  _renderUser = (user) => {
    return (
      <React.Fragment>
        <Container style={styles.cardHeaderContainer}>
          <Container style={styles.avatarContainer}>
            <img className={cx(styles.avatarIconStyle)} src={user.avatar || require('../../assets/images/Panda-icon.png')} />
          </Container>
          <Container style={styles.headerTextContainer}>
            <Text tag='h5' unstyled style={styles.headerTextStyle}>{user.name}</Text>
            <Text tag='h6' unstyled style={styles.headerSubTextStyle}>{user.intro || user.username}</Text>
          </Container>
        </Container>
        {this._renderCardBody(user.addresses)}
      </React.Fragment>
    )
  }

  _renderLoading = () => {
    return (
      <Container style={styles.loadingContainer}>
        <Spinner size={50} width={7} color={colors.lightText} />
      </Container>
    )
  }

  _renderCard = () => {
    if (this.state.isLoading) {
      return this._renderLoading()
    }

    if (this.state.user) {
      return this._renderUser(this.state.user)
    }

    if (this.state.isError) {

    }
  }

  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Navbar />
        <Container fluid style={styles.bodyContainer}>
          <Container style={styles.cardContainer}>
            {this._renderCard()}
          </Container>
        </Container>
      </Container>
    )
  }
}

Profile.propTypes = {
  match: PropTypes.any
}

export default Profile
