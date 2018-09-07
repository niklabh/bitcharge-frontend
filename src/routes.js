import Home from './screens/Home'
import Privacy from './screens/Privacy'
import Terms from './screens/Terms'
import About from './screens/About'

import Signup from './screens/Signup'
import Login from './screens/Login'
import ForgotPassword from './screens/ForgotPassword'
import ResetPassword from './screens/ResetPassword'
import Profile from './screens/Profile'
import Dashboard from './screens/Dashboard'
import AddAddress from './screens/AddAddress'
import SignupConfirmation from './screens/SignupConfirmation'

const routes = [
  {
    path: '/signup',
    component: Signup,
    name: 'Signup',
    exact: true
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    exact: true
  },
  {
    path: '/confirm',
    component: SignupConfirmation,
    name: 'SignupConfirmation',
    exact: true
  },
  {
    path: '/forgot',
    component: ForgotPassword,
    name: 'Forgot',
    exact: true
  },
  {
    path: '/password/reset',
    component: ResetPassword,
    name: 'Reset Password'
  },
  {
    path: '/profile',
    component: Dashboard,
    name: 'Dashboard',
    private: true
  },
  {
    path: '/address/new',
    component: AddAddress,
    name: 'New Address',
    private: true
  },
  {
    path: '/privacy',
    component: Privacy,
    name: 'Privacy',
    exact: true
  },
  {
    path: '/terms',
    component: Terms,
    name: 'Terms',
    exact: true
  },
  {
    path: '/about',
    component: About,
    name: 'Terms',
    exact: true
  },
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true
  },
  {
    path: '/:username',
    component: Profile,
    name: 'Profile'
  }
]

export default routes
