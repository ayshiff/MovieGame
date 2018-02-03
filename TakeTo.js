import React, {Component} from 'react'

export default class TakeTo extends Component {

    constructor(props){
        super(props)
        this.state ={

        }
    }

    render() {
        return(

    <div className="AppTakeTo">

    {/*Header Container*/}
    <MuiThemeProvider muiTheme={theme} >

    {/*Button Take me to movies*/}
      <div className='search'><RaisedButton label="Take Me To Movies" onClick={this.boutonStart.bind(this)} primary={true} /> 
      </div>
     </MuiThemeProvider>
     </div>

        )
    }
}

