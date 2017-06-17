import React from "react"
import { connect } from "react-redux"
import * as item from "../itemActions"

@connect((store) => {
    return{
        items: store.items
    }
})
export default class TodoList extends React.Component{
    render(){
        const items = this.props.items.map((item, index) => <li onClick={this.removeItem.bind(this, index)} key={index}>{item}</li>)
                                           
        return(
        <div>
            <h1>Todo</h1>
            <ul>
                {items}
            </ul>
            <input type="text" id="itemText"/>
            <button id="addButton" onClick={this.addItem.bind(this)}>add!</button>
        </div>
    )}
   
    addItem = function(){
        this.props.dispatch(item.addItem(document.getElementById("itemText").value))
    }
    
    removeItem = function(index){
        this.props.dispatch(item.removeItem(index))
    }
}