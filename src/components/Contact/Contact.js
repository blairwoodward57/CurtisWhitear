import React, { Component } from 'react';
import './Contact.css';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
import alertify from 'alertify.js';


class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        console.log('state', this.state)
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        document.getElementById("contact-form").reset();
        alertify.success("Message Sent!", 'bottom-right');

        const { name, email, subject, message } = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            subject,
            message
        })

    }

    render() {
        return (
            <div className="main-contact-container">
                <div className="contact-header">- CON T ACT-</div>
                <div className="emailer-box">
                    <Form onSubmit={this.handleSubmit} id="contact-form">
                        <FormGroup>
                            <Label for="name"></Label>
                            <Input
                                className="namebox"
                                placeHolder="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email"></Label>
                            <Input
                                className="emailbox"
                                placeHolder="email"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subject"></Label>
                            <Input
                                className="subjectbox"
                                id={'subjectid'}
                                placeHolder="subject"
                                type="subject"
                                name="subject"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message"></Label>
                            <Input
                                className="messagebox"
                                placeHolder="message"
                                type="textarea"
                                name="message"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <Button className="send-button">SEND</Button>
                    </Form>
                </div>
            </div>
        )
    }
}






export default Contact;