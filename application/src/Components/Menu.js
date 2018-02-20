import React, { Component } from 'react';
import hamburger from './image.png';
import '../Components/menu.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const styles = {
    transition: 'all .4s cubic-bezier(.65, .05, .36, 1)',    
  };

class Menu extends Component {    
    state ={
        isOpen:true,
        opacity:1,
        scale:1,
        flip:false,
    }
    
    render (){
        const body = this.state.isOpen &&           
                <div className="sidebar slide" 
                style={{...styles, opacity:this.state.opacity}}> Сайдбар</div>           
        return (
            <div className="conteiner">
                <div className="search">
                    <div className="button">
                        <a style={{cursor:'pointer'}}href="#" onClick={this.handleClick}><img className={"hamburger "+(this.state.flip ? 'flip': '')} src={hamburger}/></a> 
                    </div>
                    <input placeholder="Поиск на Lil Way" className="input" type="text"></input>                    
                </div>
                <ReactCSSTransitionGroup 
                 transitionName="fade"
                 transitionEnter={300}
                 transitionLeave={300}
                 >         
                {body}   
                </ReactCSSTransitionGroup>
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            // opacity: this.state.opacity? 0 : 1,
            isOpen:!this.state.isOpen,  
            flip:!this.state.flip
        })
        
    }     
}



export default Menu