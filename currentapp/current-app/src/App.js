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
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
  	this.setState({filterText: value})
  	console.log("Parent function called with value: ",value)
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
  	this.setState({selectedBuilding: id})
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
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
                    data={this.props.data}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
