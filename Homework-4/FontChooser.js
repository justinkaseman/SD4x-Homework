class FontChooser extends React.Component {

    constructor(props) {
	super(props);
  this.state = {hidden : true, bold: this.props.bold, fontSize: this.props.size};
    }

    toggleShow() {
      this.setState( { hidden: !this.state.hidden } );
    }

    checkBox() {
      this.setState( { bold: !this.state.bold } );
    }

    sizePlus() {
      this.setState ( { fontSize: this.state.fontSize + 1; } )
    }

    sizeMinus() {
      this.setState ( { fontSize: this.state.fontSize - 1; } )
    }

    render() {
      var weight = this.state.bold ? 'bold' : 'normal' ;
      var checked = this.state.bold ? checked : '' ;
	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={ this.state.hidden } onClick={this.checkBox.bind(this)} {checked}/>
	       <button id="decreaseButton" onClick={this.sizeMinus.bind(this)} hidden={ this.state.hidden }>-</button>
	       <span id="fontSizeSpan" hidden={ this.state.hidden }>{this.state.fontSize}</span>
	       <button id="increaseButton" onClick={this.sizePlus.bind(this)} hidden={ this.state.hidden }>+</button>
	       <span id="textSpan" onClick={this.toggleShow.bind(this)} style=( { fontWeight: weight, fontSize: this.state.fontSize } )>{this.props.text}</span>
	       </div>
	);
    }
}
