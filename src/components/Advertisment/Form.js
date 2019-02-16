import React, { Component } from 'react';
import InputMask from 'react-input-mask';

class Form extends Component {
    state = {
      title: "",
      description: "",
      name: "",
      phoneNumber: "",
      city: "",
      image: null
    };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };    
   
  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  
  handlePhoneNumberChange = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };

  imageSelectedHandler = event => {
    getBase64(event.target.files[0]).then(base64 => {
      this.setState({ image: base64 });
    });
  };

  onSubmitHandle = event => {
    event.preventDefault();
    event.target.value = null;
    this.setState({
      title: "",
      description: "",
      name: "",
      phoneNumber: "",
      city: "Gotham City"
    });
    this.props.updateDataWithNewItem(this.state);
  };

  render() {
    return (
        <form onSubmit={this.onSubmitHandle}>
          <label htmlFor="title-field">
            Название:
            <textarea
              value={this.state.title}
              onChange={this.handleTitleChange}
              id="title-field"
              name="Title"
              placeholder="Например, «ищу работу»"
              maxLength="100"
              required
              autoFocus
            />
          </label>
  
          <label htmlFor="description-field">
            Описание:
            <textarea
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              id="description-field"
              placeholder="Добавьте подробное описание"
              name="Description"
              maxLength="300"
            />
          </label>
          <label htmlFor="name-field">
            Имя:
            <textarea
              value={this.state.name}
              onChange={this.handleNameChange}
              id="name-field"
              placeholder="Ваше имя"
              name="Name"
              maxLength="50"
              />
          </label>
  
          <div className="bottom-block-wrapper">
            <div className="element-inside-bottom-block-wrapper">
              <label htmlFor="phone-number-field">
                Номер телефона:
                <InputMask
                  value={this.state.phoneNumber}
                  onChange={this.handlePhoneNumberChange}
                  id="phone-number-field"
                  mask="+7 (999) 999-99-99"
                  placeholder="+7 (___) ___-__-__"
                  required
                  title="Введи номер телефона полностью в формате РФ"
                />
              </label>
            </div>
            <div className="element-inside-bottom-block-wrapper">
              <label htmlFor="city-select">
                Ваш город:<select
                  value={this.state.city}
                  onChange={this.handleCityChange}
                  id="city-select"
                >
                  <option value="Gotham City">Gotham City</option>
                  <option value="Metropolis">Metropolis</option>
                  <option value="Smallville">Smallville</option>
                  <option value="Star City">Star City</option>
                  <option value="Central City">Central City</option>
                  <option value="Raccoon City">Raccoon City</option>
                  <option value="Megaton">Megaton</option>
                  <option value="New Reno">New Reno</option>
                  <option value="Diamond City">Diamond City</option>
                  <option value="Vice City">Vice City</option>
                  <option value="Liberty City">Liberty City</option>
                  <option value="San-Andreas">San-Andreas</option>
                </select>
              </label>
            </div>
            <div className="element-inside-bottom-block-wrapper">
              <label htmlFor="upload-image">
              Ваша фотография:<input
                  onChange={this.imageSelectedHandler}
                  id="imageFile"
                  type="file"
                  name="imageFile"
                  accept="image/*"
                />
              </label>
            </div>
  
            <button type="submit" value="submit">
              Отправить
            </button>
          </div>
        </form>
      );
  }
}

const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
};

export default Form;
