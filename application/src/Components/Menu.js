import React, { Component } from 'react';
import hamburger from './image.png';
class Menu extends Component {    
    state ={
        isOpen:true
    }
    
    render (){
        const body = this.state.isOpen && <div style={styles.sidebar}> Сайдбар</div>
        return (
            <div style={styles.conteiner}>
                <div style={styles.search}>
                    <div style={styles.button}>
                        <a href="#" onClick={this.handleClick}><img style={styles.hamburger} src={hamburger}/></a> 
                    </div>
                    <input placeholder="Поиск на Lil Way" style={styles.input} type="text"></input>                    
                </div>            
                {body}   
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }) 
     }   
}
const styles = {    
    conteiner: {
    position: 'absolute', 
    height:'76%' ,         
    top: 0,
    left: 0,
    
      
    },
    search:{
    position: 'relative',
    width: '344px',
    margin: '0 auto',
    background:'white',
    height:'35px',
    top:'50px',
    left:'17px',
    borderRadius:'5px',
    padding:'10px',
    
    
    },
    hamburger:{
    width:'40px',
    height:'40px',   
       
    },
    
    input:{     
    position:'relative',
    border: 'none',
    outline: 'none',
    fontSize:'20px',
    left:'20px',
    bottom:'13px',
   
    
    },
    button:{      
    display:'inline-block',        
    border: 'white',
    textDecorationLine: 'underline',
    
    },
    sidebar: {
    position: 'absolute',
    background: 'white',    
    width: '364px',
    height:'100%',
    top: 117,
    left: 17,
    borderRadius:'5px',
       
    }
  };

export default Menu