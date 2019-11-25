import React, { Fragment } from 'react'

class Sushi extends React.Component {

  constructor(){
    super()

    this.state = {
      showSushi: true
    }

  }

  handleClick =(price) => {
    this.setState({showSushi: false})
    this.props.handleSushiClick(price)
  }
  

  render() {
    const {id, name, img_url, price} = this.props.sushi
        return (
        <div className="sushi">
          <div className="plate" 
              onClick={() => {this.handleClick(price)}}>
                {
                  this.state.showSushi ? (<img src={img_url} width="100%" />) : null
                }
          </div>
          <h4 className="sushi-details">
            {name} - ${price}
          </h4>
        </div>
      )
    }
}


export default Sushi