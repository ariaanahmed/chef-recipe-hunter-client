import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <h2 className='text-center py-4'>Blogs</h2>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the differences between uncontrolled and controlled components?</Accordion.Header>
                    <Accordion.Body>
                        <span className='fw-semibold'>Uncontrolled: </span>
                        <span>
                            Uncontrolled components are managed by the DOM itself, rather than by React. For example, an HTML input element that uses the value attribute to hold its value would be considered an uncontrolled component.
                        </span>
                        <br />
                        <span className='fw-semibold'>Controlled: </span>
                        <span>
                            controlled components controlled by the parent component. controlled components data is managed by React.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes?</Accordion.Header>
                    <Accordion.Body>
                        PropTypes is a package in React that is used to validate props passed to a component. to validate props to need to  Import the PropTypes library. there are some example given below.   <br />
                        <code>
                            prop1: PropTypes.string, <br />
                            prop2: PropTypes.number.isRequired, <br />
                            prop3: PropTypes.arrayOf(PropTypes.string)
                        </code>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the difference between nodejs and express js?</Accordion.Header>
                    <Accordion.Body>
                        Node.js and Express.js are both frameworks
                        <p>Node.js: It is a JavaScript runtime environment that allows developers to run JavaScript code on the server-side. such as HTTP, File System, and Crypto modules etc.</p>
                        <p>Express.js: It is a web framework built on top of Node.js that provides a set of tools and utilities for building web applications, such as middleware, routing, and templates.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                    <Accordion.Body>
                        A custom hook is a function in React that allows you to reuse logic across multiple components.
                        <ol>
                            <li>Reducing code duplication and improving maintainability.</li>
                            <li>complex logic away from the component</li>
                            <li>
                                Share stateful logic between components that are not directly related, such as a dropdown menu and a modal dialog
                            </li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Container>
    );
};

export default Blogs;