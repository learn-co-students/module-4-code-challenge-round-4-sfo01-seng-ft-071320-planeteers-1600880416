import React from 'react';

class Planeteer extends React.Component {

// come back to this after search

  state = {
    showQuote: true
  }

  showQuote = () => {
    console.log(this.state)
    this.setState({
      showQuote: !this.state.showQuote
    })
  }

  render() {
    // console.log(this.props.planeteer)
    const {id, name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.showQuote} />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.showQuote && bio || quote}</p> 
            <div className="card__detail">
              <p>{twitter}</p>
              <p>{fromUSA === true ?  "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
