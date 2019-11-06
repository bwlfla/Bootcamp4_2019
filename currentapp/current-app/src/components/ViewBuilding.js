import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding}=this.props;
		let view=data.find((element) => element.id==selectedBuilding);
		let coordinates=null;
		let address=null;
		let showToScreen=<div>
				<p>
					<i>Click on a name to view more information</i>
				</p>
			</div>;

		if(view){
			let hasCoordinates=view.coordinates;
			let hasAddress=view.address;
			if(hasCoordinates){
				coordinates=<div>
								<h3>
									Latitude: {view.coordinates.latitude}
								</h3>
								<h3>
									Longitude: {view.coordinates.longitude}
								</h3>
							</div>
			}
			if(hasAddress){
				address=<div>
							<h3>
								Address: {view.address}
							</h3>
						</div>
			}
			showToScreen=
				<div>
					<p>
						<h3>Name: {view.name}</h3>
						<h3>ID: {view.id}</h3>
						<h3>Code: {view.code}</h3>
						<i>{coordinates}</i>
						<i>{address}</i>
					</p>
				</div>;

		}
//		let hasCoordinates=view.coordinates.latitude;

		return showToScreen;
	}
}
export default ViewBuilding;
