import React, { Component, Image } from 'react';
import './App.css';
import { Button , ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import  theme  from './Theme';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { setTimeout } from 'timers';





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'https://api.themoviedb.org/3/discover/movie?api_key=6411cdf86812f3aa034a00c5987adb76&language=fr-FR&include_adult=false&include_video=false&page=',
      title: null,
      image: null,
      description: null,
      backdrop: null,
      popularity: null,
      average: null,
      titleRight: null,
      imageRight: null,
      descriptionRight: null,
      backdropRight: null,
      popularityRight: null,
      averageRight: null,
      score: 0,
      erreur: 0

    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.fetchMovies2 = this.fetchMovies2.bind(this);
  }


  fetchMovies () {
    var pagevalueDiscover = Math.floor(Math.random() * 1000) + 1;
    
    var pagevalue = Math.floor(Math.random() * 100) + 1;
    
    var reex = /a-z!?,:0-9/
    
        // First request
        axios.get(this.state.url + pagevalue)
        .then(response => {
        var RandomMovie = Math.floor(Math.random() * 19);
        var VueMovie = response.data.results[RandomMovie];
        var MovieTitle = VueMovie.title;

        if(reex.test(MovieTitle) || MovieTitle == undefined){
          this.fetchMovies();
          return;
        }
        var MovieDesc = VueMovie.overview;
        if(MovieDesc === '' ){
          this.fetchMovies();
          return;
        }
        
        var MoviePopularity = VueMovie.popularity;
        var MovieAverage = VueMovie.vote_average;
        if(MovieAverage === 0){
          this.fetchMovies();
          return;
        }
        var MoviePoster = 'https://image.tmdb.org/t/p/w500'+VueMovie.poster_path;
        var MovieBackDrop = 'https://image.tmdb.org/t/p/w500'+VueMovie.backdrop_path;
        this.setState({title: MovieTitle});
        this.setState({image: MoviePoster});
        this.setState({backdrop: MovieBackDrop});
        this.setState({average: MovieAverage});
        this.setState({popularity: MoviePopularity});
    });

    
  };

  fetchMovies2 (){
    var reex = /a-z!?,:0-9/
    var pagevalueDiscover2 = Math.floor(Math.random() * 1000) + 1;
    var pagevalue2 = Math.floor(Math.random() * 60) + 1;

    // Second request
    axios.get(this.state.url + pagevalue2)
    .then(response => {
    var RandomMovie2 = Math.floor(Math.random() * 19);
    var VueMovie2 = response.data.results[RandomMovie2];
    var MovieTitle2 = VueMovie2.title;

    if(reex.test(MovieTitle2) || MovieTitle2 == undefined){
      this.fetchMovies2();
      return;
    }
    var MovieDesc2 = VueMovie2.overview;
    if(MovieDesc2 === '' ){
      this.fetchMovies2();
      return;
    }
    var MoviePopularity2 = VueMovie2.popularity;
    var MovieAverage2 = VueMovie2.vote_average;
    if(MovieAverage2 === 0){
      this.fetchMovies();
      return;
    }
    var MoviePoster2 = 'https://image.tmdb.org/t/p/w500'+VueMovie2.poster_path;
    var MovieBackDrop2 = 'https://image.tmdb.org/t/p/w500'+VueMovie2.backdrop_path;
    this.setState({titleRight: MovieTitle2});
    this.setState({imageRight: MoviePoster2});
    this.setState({backdropRight: MovieBackDrop2});
    this.setState({averageRight: MovieAverage2});
    this.setState({popularityRight: MoviePopularity2});

});
  };



  onButtonClick = function(event){
    var that = this;
    document.querySelector('.AverageRight').style.display = 'block'; 
    document.querySelector('.AverageLeft').style.display = 'block'; 

    if(this.state.average >= this.state.averageRight ){
      this.state.score += 5;
      } else {
        this.state.erreur += 1
      }
      if(this.state.erreur === 3){
        alert('Vous avez perdu')
        this.state.erreur = 0;
      }

      setTimeout(function(){
        document.querySelector('.AverageRight').style.display = 'none';
        document.querySelector('.AverageLeft').style.display = 'none';
        that.fetchMovies();
        that.fetchMovies2();
        
      }, 2500);
  }

  onButtonClick2 = function(event){
    var that = this;
    document.querySelector('.AverageRight').style.display = 'block'; 
    document.querySelector('.AverageLeft').style.display = 'block'; 
    if(this.state.average <= this.state.averageRight ){
      this.state.score += 5;
    } else {
      this.state.erreur += 1
      this.state.score = 0;
    }
    if(this.state.erreur == 3){
      alert('Vous avez perdu')
      this.state.erreur = 0;
      this.state.score = 0;
    }
    setTimeout(function(){
      document.querySelector('.AverageLeft').style.display = 'none';
      document.querySelector('.AverageRight').style.display = 'none';
      that.fetchMovies();
      that.fetchMovies2();
      
    }, 2500);

    //this.fetchMovies()
    //this.fetchMovies2()
  }
  
  boutonStart () {
    this.onButtonClick();
    document.querySelector('.search').style.display = 'none';
    setTimeout(function(){
    document.querySelector('.ContainerContribution').style.display = 'block';
    document.querySelector('.Erreur').style.display = 'block';
    document.querySelector('.Score').style.display = 'block';
    document.querySelector('.contentRight').style.display = 'block';
    document.querySelector('.contentLeft').style.display = 'block';
    }, 2500);
    
  }
 

  

  render() {
    return (
     
      
      <div className="App">
      <MuiThemeProvider muiTheme={theme} >
      <div className="header">
      <h1 className="Score">Score : {this.state.score}</h1>
      <h1 className="Erreur">Erreurs : {this.state.erreur}</h1>
      
      </div>
      <div className='search'><RaisedButton label="Take Me To Movies" onClick={this.boutonStart.bind(this)} primary={true} /> 
        </div>
       </MuiThemeProvider>
       <div className="FlexContainer">
      <div className="contentLeft">
      <h1 className="AverageLeft">{this.state.average}</h1>
      <div className='ImageContainer'> 
      <img className='Image2' src ={this.state.image} alt='Illustration Movie' onClick={this.onButtonClick.bind(this)} />
      </div>
      

      </div>
      <div className="ContainerContribution">
      <img className='ImageContribution' src ='./contribution.png' alt='Illustration Movie'  />
      </div>

      <div className="contentRight">
      <h1 className="AverageRight">{this.state.averageRight}</h1>
      <div className='ImageContainerRight'> 
      <img className='Image' src ={this.state.imageRight} alt='Illustration Movie' onClick={this.onButtonClick2.bind(this)} />
      
      

      </div>

      </div>
      </div>
      </div> 
    );
  }
  }


export default App;