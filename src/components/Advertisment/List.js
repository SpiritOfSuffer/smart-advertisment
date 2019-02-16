import React, { Component } from "react";

class List extends Component {
  handleOnDeleteCard = event => {
    this.props.updateDataWithDeletedItem(event);
  };

  render() {
    const titles = this.props.data.titlesArray.map((title, index) => (
      <h2
        key={`title-${index}`}
        propfordeletingbyindex={index}
        className="phoneNumber-in-card"
      >
        {title}
      </h2>
    ));

    const descriptions = this.props.data.descriptionsArray.map(
      (description, index) => (
        <p key={`description-${index}`} propfordeletingbyindex={index}>
          {description}
        </p>
      )
    );

    const names = this.props.data.namesArray.map(
      (name, index) => (
        <p key={`name-${index}`} propfordeletingbyindex={index}>
          {name}
        </p>
      )
    );

    const phoneNumbers = this.props.data.phoneNumbersArray.map(
      (phoneNumber, index) => (
        <span
          key={`phoneNumber-${index}`}
          propfordeletingbyindex={index}
          className="phoneNumber-in-card"
        >
          {phoneNumber}
        </span>
      )
    );

    const cities = this.props.data.cityArray.map((city, index) => (
      <span
        propfordeletingbyindex={index}
        key={`city-${index}`}
        className="city-in-card"
      >
        {city}
      </span>
    ));

    const images = this.props.data.imagesArray.map((image, index) => (
      <img
        alt="person"
        key={`image-${index}`}
        propfordeletingbyindex={index}
        className="image-in-card"
        src={image}
      />
    ));

    const toArrayOfObjects = titles.map((item, index) => ({
      titles: titles[index],
      descriptions: descriptions[index],
      names: names[index],
      phoneNumbers: phoneNumbers[index],
      cities: cities[index],
      images: images[index]
    }));

    const renderArrayOfObjects = toArrayOfObjects.map((item, key) => (
      <li key={`item-in-array-of-object-${key}`}>
        {item.images}
        {item.titles}
        {item.descriptions}
        {item.names}
        <div className="bottom-of-card">
          {item.cities}
          {item.phoneNumbers}
        </div>
        <span
          role="img"
          aria-label="close-emoji"
          onClick={() => this.handleOnDeleteCard(item)}
          className="deleteCardSymbol"
        >
          ✘
        </span>
      </li>
    ));

    return (
      <section>
        <ul>{renderArrayOfObjects}</ul>
      </section>
    );
  }
}

export default List;