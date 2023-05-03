import './index.css'

import UserInfo from '../UserInfo/index'
import BlogList from '../BlogList/index'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <div>
      <BlogList />
    </div>
  </div>
)

export default Home
