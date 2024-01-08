import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="mainContainer">
        <Header />
        <div className="HomeContainerSm">
          <div className="sm">
            <h1 className="homeHeading">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="HomeImg"
            />
            <p className="homePara">
              Fashion is part of the daily air and it does not quite help that
              is changes all the time . Clothes have always been a marker of the
              era and we are in a resolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shopNowButton" type="button">
              Shop Now
            </button>
          </div>
        </div>
        <div className="HomeContainer">
          <div className="container">
            <div className="part">
              <h1 className="homeHeading">Clothes That Get YOU Noticed</h1>
              <p className="homePara">
                Fashion is part of the daily air and it does not quite help that
                is changes all the time . Clothes have always been a marker of
                the era and we are in a resolution. Your fashion makes you been
                seen and heard that way you are. So, celebrate the seasons new
                and exciting fashion in your own way.
              </p>
              <button className="shopNowButton" type="button">
                Shop Now
              </button>
            </div>
            <div className="part image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="HomeImg"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
