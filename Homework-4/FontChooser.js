class FontChooser extends React.Component {

    constructor(props) {
	super(props);
  this.state = {hidden : true};
    }

    toggle() {
      this.setState( { hidden: !this.state.hidden } );
    }

    render() {

	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={ this.state.hidden }/>
	       <button id="decreaseButton" hidden={ this.state.hidden }>-</button>
	       <span id="fontSizeSpan" hidden={ this.state.hidden }>{this.props.size}</span>
	       <button id="increaseButton" hidden={ this.state.hidden }>+</button>
	       <span id="textSpan" onClick={this.toggle.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}
