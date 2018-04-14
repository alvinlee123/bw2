import React from 'react';

const ButtonJoin = ({ onClick }) => (
  <div id="ButtonJoin" className="ui middle aligned center aligned segment">
    <button className="ui basic button" onClick={ onClick } >
      <i className="icon user"></i>
      Introduce Yourself
    </button>
  </div>
);

export default ButtonJoin;
