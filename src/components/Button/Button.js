import { Component } from 'react';

export default class Button extends Component {
  handleClick = () => {
    return this.props.onClick(1);
  };

  render() {
    return (
      <button onClick={this.handleClick} className="Button" type="button">
        Load More!
      </button>
    );
  }
  //   this.state.responseData.length > 0 && <Button onClick={this.onClick} />;
}
