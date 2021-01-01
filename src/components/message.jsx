import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
class Message extends Component {
    state = {  }
    render() { 
        const msgstyles={
            width:'30px',
            color: 'blue'
          }
        return ( 
            <div className="container">
                <div className="card">
                    <div className="card-body d-flex" style={msgstyles}>
                        <h3><i>Wishing You And Your family a <br/> HAPPY NEW YEAR</i></h3>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Message;