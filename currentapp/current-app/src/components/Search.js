import React from 'react';

class Search extends React.Component {
	filterUpdate() {
//		console.log(this.filter.value);
		this.props.filterUpdate(this.filter.value);
		//Here you will need to update the value of the filter with the value from the textbox
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input
					type="text"
					placeholder="Type to Filter"
					//pass in value as a param, this.filter (ref name we want to use) is set to value
					ref={ (value) => {this.filter=value} }
					onChange={this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}
export default Search;
