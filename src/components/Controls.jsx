import React from 'react';

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange(newStatus){
    // Currying => chamo uma funcao que retorna uma funcao
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  componentWillReceiveProps(newProps){
    
  },
  render(){
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if (countdownStatus === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    }

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

export default Controls;
