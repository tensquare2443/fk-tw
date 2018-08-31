import React, {Component} from 'react';
import Nav from './components/nav';
import Options from './components/options';
import Content from './components/content';
import './App.css';
import {imgurClientId} from './vars';
import axios from 'axios';

//desktop tweet-width is fixed at 590px
//at 590px, toggle mobile tweet content, with its max-width at 300px.
//at 850px, hide options-displayed, make it toggleable (at fixed 300px)
//at 300px, make Options full-width when toggled

/*
TO DO:
- hashtag font coloring
*/

/*
OPTIONS:
- a form with options for vals in fake tweet
- basic vals: prof photo, username, display name, date/time of tweet, tweet text, comments, likes, retweets, bluecheck
- advanced vals: retweeted, pinned, photo(s) uploaded, replying to, ...
- be able to populate vals with vals from a real twitter user

- old tweet date/time format: 3 Oct 2015
*/

/*
OTHER
- https://fontawesome.com/icons/twitter?style=brands
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsToggled: false,
      userPhotoInput: '',
      usernameInput: 'username',
      displayNameInput: 'display_name',
      dateAndTimeInput: '20h',
      textInput: 'This is the tweet text!',
      commentCountInput: '11K',
      retweetCountInput: '36K',
      likeCountInput: '42K',
      verifiedStatusInput: false,
      imgurLink: false,
      base64Image: ''
    };
  }
  resetForm = () => {
    this.setState({userPhotoInput: ''});
    this.setState({usernameInput: 'username'});
    this.setState({displayNameInput: 'display_name'});
    this.setState({dateAndTimeInput: '20h'});
    this.setState({textInput: 'This is the tweet text!'});
    this.setState({commentCountInput: '11K'});
    this.setState({retweetCountInput: '36K'});
    this.setState({likeCountInput: '42K'});
    this.setState({verifiedStatusInput: false});
    this.setState({imgurLink: false});
    this.setState({base64Image: ''});
    document.getElementsByClassName('text')[0].innerText = 'This is the tweet text!';
    document.getElementById('verified').checked = false;
  };
  removePhoto = () => {
    this.setState({userPhotoInput: ''});
    this.setState({base64Image: ''});
  }
  userPhotoInputChange = (e) => {
    this.setState({userPhotoInput: e.currentTarget.value});
    var photoInput = document.getElementById('photoInput').files[0];
    var reader = new FileReader();

    reader.readAsDataURL(photoInput);

    reader.onloadend = () => {
      var base64Image = reader.result;
      this.setState({base64Image});
    }
  }
  usernameInputChange = (e) => {
    var usernameInput = e.currentTarget.value;

    if (usernameInput.length <= 15) {
      this.setState({usernameInput});
    } else {
      usernameInput = usernameInput.substr(0, 15);
      this.setState({usernameInput});
    }
  };
  displayNameInputChange = (e) => {
    var displayNameInput = e.currentTarget.value;

    if (displayNameInput.length <= 45) {
      this.setState({displayNameInput});
    } else {
      displayNameInput = displayNameInput.substr(0, 45);
      this.setState({displayNameInput});
    }
  };
  dateAndTimeInputChange = (e) => {
    var dateAndTimeInput = e.currentTarget.value;

    if (dateAndTimeInput.length <= 11) {
      this.setState({dateAndTimeInput});
    } else {
      dateAndTimeInput = dateAndTimeInput.substr(0, 11);
      this.setState({dateAndTimeInput});
    }
  };
  textInputChange = (e) => {
    var textInput = e.currentTarget.value;

    if (textInput.length <= 240) {
      document.getElementsByClassName('text')[0].innerText = textInput;
      this.setState({textInput});
    } else {
      textInput = textInput.substr(0, 240);
      document.getElementsByClassName('text')[0].innerHTML = textInput;
      this.setState({textInput});
    }
  };
  commentCountInputChange = (e) => {
    var commentCountInput = e.currentTarget.value;

    if (commentCountInput.length <= 5) {
      this.setState({commentCountInput});
    } else {
      commentCountInput = commentCountInput.substr(0, 5);
      this.setState({commentCountInput});
    }
  }
  retweetCountInputChange = (e) => {
    var retweetCountInput = e.currentTarget.value;

    if (retweetCountInput.length <= 5) {
      this.setState({retweetCountInput});
    } else {
      retweetCountInput = retweetCountInput.substr(0, 5);
      this.setState({retweetCountInput});
    }
  }
  likeCountInputChange = (e) => {
    var likeCountInput = e.currentTarget.value;

    if (likeCountInput.length <= 5) {
      this.setState({likeCountInput});
    } else {
      likeCountInput = likeCountInput.substr(0, 5);
      this.setState({likeCountInput});
    }
  }
  verifiedInputChange = (e) => {
    const verifiedStatusInput = e.currentTarget.checked;

    this.setState({verifiedStatusInput});
  }
  toggleOptions = () => this.setState({
    optionsToggled: !this.state.optionsToggled
  });
  render() {
    return (
      <div className="App">
        <Nav toggleOptions={this.toggleOptions}/>
        <div className="app-content">
          <Options
            optionsToggled={this.state.optionsToggled}
            userPhotoInput={this.state.userPhotoInput}
            usernameInput={this.state.usernameInput}
            displayNameInput={this.state.displayNameInput}
            dateAndTimeInput={this.state.dateAndTimeInput}
            textInput={this.state.textInput}
            commentCountInput={this.state.commentCountInput}
            retweetCountInput={this.state.retweetCountInput}
            likeCountInput={this.state.likeCountInput}
            userPhotoInputChange={this.userPhotoInputChange}
            usernameInputChange={this.usernameInputChange}
            displayNameInputChange={this.displayNameInputChange}
            dateAndTimeInputChange={this.dateAndTimeInputChange}
            textInputChange={this.textInputChange}
            commentCountInputChange={this.commentCountInputChange}
            retweetCountInputChange={this.retweetCountInputChange}
            likeCountInputChange={this.likeCountInputChange}
            verifiedInputChange={this.verifiedInputChange}
            submitToImgur={this.submitToImgur}
            removePhoto={this.removePhoto}
            resetForm={this.resetForm}
          />
          <Content
            userPhoto={this.state.userPhotoInput}
            username={this.state.usernameInput}
            displayName={this.state.displayNameInput}
            dateAndTime={this.state.dateAndTimeInput}
            text={this.state.textInput}
            commentCount={this.state.commentCountInput}
            retweetCount={this.state.retweetCountInput}
            likeCount={this.state.likeCountInput}
            verifiedStatus={this.state.verifiedStatusInput}
            base64Image={this.state.base64Image}
          />
        </div>
      </div>
    );
  }
}

export default App;
