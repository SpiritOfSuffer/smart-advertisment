import React, { Component } from "react";

class List extends Component {
  handleOnDeleteCard = event => {
    this.props.updateDataWithDeletedItem(event);
  };

  render() {
    const titles = this.props.data.titlesArray.map((title, index) => (
      <div
        key={`title-${index}`}
        propfordeletingbyindex={index}
      >
        {title}
      </div>
    ));

    const descriptions = this.props.data.descriptionsArray.map(
      (description, index) => (
        <div key={`description-${index}`} propfordeletingbyindex={index}>
          {description}
        </div>
      )
    );

    const names = this.props.data.namesArray.map(
      (name, index) => (
        <div key={`name-${index}`} propfordeletingbyindex={index}>
          {name}
        </div>
      )
    );

    const phoneNumbers = this.props.data.phoneNumbersArray.map(
      (phoneNumber, index) => (
        <div
          key={`phoneNumber-${index}`}
          propfordeletingbyindex={index}
          className="phoneNumber"
        >
          {phoneNumber}
        </div>
      )
    );

    const cities = this.props.data.cityArray.map((city, index) => (
      <div
        propfordeletingbyindex={index}
        key={`city-${index}`}
        className="city"
      >
        {city}
      </div>
    ));

    const images = this.props.data.imagesArray.map((image, index) => (
      <div><img
        alt="person"
        key={`image-${index}`}
        propfordeletingbyindex={index}
        className="image-in-card"
        src={image}
      /></div>
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
     <div className={'objects'}key={`item-in-array-of-object-${key}`}>
        <div className={'title'}>{item.titles}</div>
        <div className={'description'}>{item.descriptions}</div>
        <div className={'description'}>{item.names}</div>
        <div className={'image'}>{item.images}</div>
        <div >{item.cities}</div>
        <div >{item.phoneNumbers}</div>
        <div className={'delete'} onClick={() => this.handleOnDeleteCard(item)}>Удалить</div>
        <div className={'edit'} >Редактировать</div>
      </div>
    ));

    return (
      <div className={'root-title'}>Объявление
        {renderArrayOfObjects}
      </div>
    );
  }
}

export default List;