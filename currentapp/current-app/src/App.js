import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      listOfBuildings: this.props.data
    };
  }

  filterUpdate(value) {
  	this.setState({filterText: value})
  	//console.log("Parent function called with value: ",value)
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
  	this.setState({selectedBuilding: id})
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

  addBuilding(code, name, longitude, latitude, address){
  	let end=this.state.listOfBuildings[this.state.Buildings.length-1].id
  	let newData=this.state.listOfBuildings;

  	newData.push({
  		id:end+1,
  		code: code,
  		name: name,
  		coordinates: {
  			longitude: longitude,
  			latitude: latitude
  		},
  		address: address
  	})
  	this.setState({
  		listOfBuildings: newData
  	})
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
        	filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.listOfBuildings}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
              	data={this.state.listOfBuildings}
              	selectedBuilding={this.state.selectedBuilding} 
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
