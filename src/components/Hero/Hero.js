import React from 'react';
import './Hero.css';
import Popup from 'reactjs-popup';


export default class Hero extends React.Component{
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
      openModal() {
        this.setState({ open: true });
      }
      closeModal() {
        this.setState({ open: false });
      }
    
    render(){
        return (
            <section className="Hero">
                <div className="Hero-inner">
                <h1>Cactus Head</h1>
                <div className="Button-Container">
                    <button className="button" onClick={this.openModal}>
                        First time to this page? Click here.
                    </button>
                </div>
                <h2>The site for Amateur Plant Lovers.</h2>
                </div>
                <br/>
                
                <Popup
                    open={this.state.open}
                    onClose={this.closeModal}
                >
                    <div className="modal">
                        <button className="close" onClick={this.closeModal}>
                            X
                        </button>
                        <br/>

                    
                    <p>
                        Welcome to Cactus Head, a website for plant information. A button was added to to the login page where the user can press and login as a demo user, but feel free to create your own account by pressing the register button. After Logging in to the page, please go to the search plant page by clicking the button on the top right. It will redirect you to the page. by entering a plant name inside the search bar. you will return with all the plants with either scientific or common name that contains the input keyword.
                    </p>
                    </div>
                </Popup>
                
            </section>
        )
    }
}