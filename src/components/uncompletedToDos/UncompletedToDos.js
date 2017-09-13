import React, {Component} from 'react';


export default class  UnCompletedToDos extends Component {

    render(){
        const myStyle={
            color: "red",
        }

        return(
            <div>
                <br/>
               
                <ul color='red'>
                    {
                        this.props.uncompletedToDos.map((toDo,i)=>{
                            return <li key={i} style ={myStyle}><span  onClick={this.props.markToDoComplete}>{toDo}</span></li>
                        })
                    }
                    
                </ul>
            </div>

        )
    }
}