import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import Kappa from "../../imgs/Kappa.jpg"

class Form extends Component {
    state = {
      title: "",
      description: "",
      name: "",
      phoneNumber: "",
      city: "Gotham City",
      image: Kappa
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
          <div className={'input-sub-title'}>
            <div style={{marginTop: '24px'}}>Заголовок</div>
            <input type='text' className='sub-title' value={this.state.title}
                    maxLength={140}  
                    onChange={this.handleTitleChange}
                    onBlur={this.onBlurSubTitleChange}
                    onFocus={this.onFocusSubTitleChange}
                    autoFocus
                    required
                    />
              <div id={'sub-title-decrip-info'}>
                <div>Обзятельное поле</div>
                <div>Не более 140 символов</div>
              </div>     
          </div>
          
          <div className={'input-sub-title'}>
            <div style={{marginTop: '29px'}}>Текст объявления</div>
            <textarea className='text-area'  style={{marginTop: '8px'}} value={this.state.description}
              maxLength={300} onChange={this.handleDescriptionChange}/>
            <div id={'text-area-decrip'}>
              <div>Не более 300 символов</div>
            </div>
          </div>

          <div className={'input-sub-title'}>
            <div style={{marginTop: '29px'}}>Ваше имя</div>
            <input type='text' className='sub-title' value={this.state.name}
                   maxLength={50}  
                   onChange={this.handleNameChange}
                   autoFocus/>
            <div id={'text-area-decrip'}>
              <div>Не более 50 символов</div>
            </div>
          </div>
  
          <div className={'input-sub-title'}>
            
          <div style={{marginTop: '29px'}}>Номер телефона:</div>
                <InputMask
                  value={this.state.phoneNumber}
                  onChange={this.handlePhoneNumberChange}
                  id="phone-number-field"
                  mask="+7 (999) 999-99-99"
                  placeholder="+7 (___) ___-__-__"
                  required
                  title="Введи номер телефона полностью в формате РФ"
                />
              
            </div>
            <div className={'input-sub-title'}>
                <div style={{marginTop: '28px'}}>Город</div>
                <select value={this.state.city} onChange={this.handleCityChange} id="city-select">
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
            </div>
            <div className={'fake-input'}>
                <div style={{marginTop: '32px', position:'relative'}}>
                    <div className={'fake-input-div'}>Прикрепить фото</div></div>
            
                <input
                  onChange={this.imageSelectedHandler}
                  id="imageFile"
                  type="file"
                  name="imageFile"
                  accept="image/*"
                />
         </div>
  
            <button type="submit" value="submit" style={{marginTop: '32px'}}>
              Отправить
            </button>
          
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
