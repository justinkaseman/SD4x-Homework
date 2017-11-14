class FontChooser extends React.Component {

    constructor(props) {
	super(props);
  this.state = {hidden : true, bold: this.props.bold, fontSize: this.props.size, minMax: false};
    }

    toggleShow() {
      this.setState( { hidden: !this.state.hidden } );
    }

    checkBold() {
      this.setState( { bold: !this.state.bold } );
    }

    sizePlus() {
      if (this.state.fontSize < this.props.max) {
      this.setState ( { fontSize: this.state.fontSize + 1 } )
      this.setState ( { minMax: false } )
      }
      else if (this.state.fontSize = this.props.max) {
      this.setState ( { minMax: true } )
      };
    }

    sizeMinus() {
      if (this.state.fontSize > this.props.min) {
      this.setState ( { fontSize: this.state.fontSize - 1 } )
      this.setState ( { minMax: false } )
      }
      else if (this.state.fontSize = this.props.max) {
      this.setState ( { minMax: true } )
      };
    }

    defaultValue() {
      this.setState( { fontSize: this.props.size });
    }

    render() {
      var weight = this.state.bold ? 'bold' : 'normal' ;
      var minMaxColor = this.state.minMax ? 'red' : 'black' ;
	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={ this.state.hidden } onClick={this.checkBold.bind(this)} checked={this.state.bold} />
	       <button id="decreaseButton" onClick={this.sizeMinus.bind(this)} hidden={ this.state.hidden }>-</button>
	       <span id="fontSizeSpan" style=( { color: minMaxColor } ) onDoubleClick={this.defaultValue.bind(this)} hidden={ this.state.hidden }>{this.state.fontSize}</span>
	       <button id="increaseButton" onClick={this.sizePlus.bind(this)} hidden={ this.state.hidden }>+</button>
	       <span id="textSpan" onClick={this.toggleShow.bind(this)} style=( { fontWeight: weight, fontSize: this.state.fontSize } )>{this.props.text}</span>
	       </div>
	);
    }
}
