import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const moneySum = () => {
    let result = props.money.reduce((a,b) => a + b, 0)
    return result
  }
  
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ 100 - moneySum() } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.money)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table