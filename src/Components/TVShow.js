import React from 'react';

const TVShow = props => {

  const {show} = props

  const clickHandler = () => {
    props.selectShow(show)
  }

  return (
    <div>
      <br/>
      <img src={show.image.medium} onClick={clickHandler} alt=""/>
    </div>
  );
}

export default TVShow;
