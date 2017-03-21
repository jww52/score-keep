import React from 'react';

import {Players} from './../api/players';

export default class Player extends React.Component{
render() {
  let user = this.props.player;

  let itemClassName = `item item--position-${user.rank}`;

  return (
      <div key={user._id} className={itemClassName}>
        <div className="player">
          <div className="player__overflow">
            <h3 className="player__name">{user.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place. {user.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => {
              Players.update(user._id,{$inc: {score: -1}});
              }}>-1</button>
            <button className="button button--round" onClick={() => {
              Players.update(user._id,{$inc: {score: 1}});
              }}>+1</button>
            <button className="button button--round" onClick={() => Players.remove(user._id)}> X </button>
          </div>
        </div>
      </div>
    );
  }
};

//setup prop types player should be required object.
Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
