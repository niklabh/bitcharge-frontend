import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import Select from 'react-select'
import QRCode from 'qrcode.react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import API from '../../api'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Spinner from '../../components/Spinner'
import Button from '../../components/Button'

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
      selectedAddress: null,
      copiedAddress: false
    }
  }

  onCopyAddress = () => {
    this.setState({ copied: true })
    setInterval(() => {
      this.setState({ copied: false })
    }, 3000)
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
              <Container style={styles.noAddressImageContainer}>
                <img className={cx(styles.noAddressImage)} src='https://res.cloudinary.com/bitcharge/image/upload/v1536110953/assets/building-profile.png' />
              </Container>
              <Text tag='h5' style={styles.noAddressText}>This profile is still in progress. No addresses added yet.</Text>
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
            <Text tag='h6' style={styles.addressValueText}>{addressText}</Text>
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
            <img alt='user-avatar' className={cx(styles.avatarIconStyle)} src={user.avatar || 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png'} />
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

  _renderError = () => {
    return (
      <React.Fragment>
        <Container style={styles.cardErrorHeaderContainer}>
          <Container style={styles.errorHeaderTextContainer}>
            <Text tag='h3' unstyled style={styles.errorHeaderTextStyle}>We couldn't find that Bitcharge profile</Text>
          </Container>
        </Container>
        <Container style={styles.errorUserContainer}>
          <Container style={styles.noAddressImageContainer}>
            <img className={cx(styles.errorUserImage)} src='https://res.cloudinary.com/bitcharge/image/upload/v1536119853/assets/user-not-found.png' />
          </Container>
          <Text tag='h6' style={styles.errorUserText}>Seems like nobody has a Bitcharge profile with that username, try checking the link again. You can also create your own Bitcharge profile with this username. </Text>
          <Button tag={Link} to='/signup' primary style={styles.getStartedButton}>Create My Profile <i className={`icon ion-md-arrow-round-forward ${styles.getStartedButtonIcon}`} /></Button>
        </Container>
      </React.Fragment>
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
      return this._renderError()
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
        <Footer />
      </Container>
    )
  }
}

Profile.propTypes = {
  match: PropTypes.any
}

export default Profile
