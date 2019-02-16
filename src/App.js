import React, { Component } from "react";
import List from "./components//Advertisment/List";
import Form from "./components/Advertisment/Form";

class App extends Component {
  state = {
    titlesArray: [],
    descriptionsArray: [
      
    ],
    namesArray: [],
    phoneNumbersArray: [],
    cityArray: [],
    imagesArray: []
  };

  componentDidMount() {
    localStorage.getItem("advertisment-localStorage") &&
      this.setState(
        JSON.parse(localStorage.getItem("advertisment-localStorage"))
      );
  }

  componentDidUpdate() {
    localStorage.setItem(
      "advertisment-localStorage",
      JSON.stringify(this.state)
    );
  }

  updateDataWithNewItem = value => {
    this.setState(previousState => ({
      titlesArray: [value.title, ...previousState.titlesArray ],
      descriptionsArray: [
        value.description,
        ...previousState.descriptionsArray
      ],
      namesArray: [
        value.name,
        ...previousState.namesArray
      ],
      phoneNumbersArray: [
        value.phoneNumber,
        ...previousState.phoneNumbersArray
      ],
      cityArray: [value.city, ...previousState.cityArray],
      imagesArray: [value.image, ...previousState.imagesArray]
    }));
  };

  updateDataWithDeletedItem = value => {
    this.setState({
      titlesArray: this.state.titlesArray.filter(
        (item, index) => index !== value.titles.props.propfordeletingbyindex
      ),
      descriptionsArray: this.state.descriptionsArray.filter(
        (item, index) =>
          index !== value.descriptions.props.propfordeletingbyindex
      ),
      namesArray: this.state.namesArray.filter(
        (item, index) =>
          index !== value.names.props.propfordeletingbyindex
      ),
      phoneNumbersArray: this.state.phoneNumbersArray.filter(
        (item, index) =>
          index !== value.phoneNumbers.props.propfordeletingbyindex
      ),
      cityArray: this.state.cityArray.filter(
        (item, index) => index !== value.cities.props.propfordeletingbyindex
      ),
      imagesArray: this.state.imagesArray.filter(
        (item, index) => index !== value.images.props.propfordeletingbyindex
      )
    });
  };

  render() {
    return (
      <div>
        <List
          updateDataWithDeletedItem={this.updateDataWithDeletedItem}
          updateDataWithEditedItem={this.updateDataWithEditedItem}
          data={this.state}
        />
        <Form updateDataWithNewItem={this.updateDataWithNewItem} />
      </div>
    );
  }
}

export default App;