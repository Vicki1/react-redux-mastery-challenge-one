import React, {Component} from 'react';


export default class  UnCompletedToDos extends Component {

    render(){
        const myStyle={
            color: "red",
        }

        return(
            <div>
               
               
                <ul color='red'>
                    {
                        this.props.uncompletedToDos.map((toDo,i)=>{
                            return <li key={i} style ={myStyle}>{toDo}</li>
                        })
                    }
                    
                </ul>
            </div>

        )
    }
}