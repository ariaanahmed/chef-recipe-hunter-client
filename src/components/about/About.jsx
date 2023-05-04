import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className='bg-light py-5 px-3'>
                <h1> Welcome to our website!</h1>

                <p className='fw-semibold'>
                    We are a team of passionate chefs and food enthusiasts dedicated to sharing our love of all things culinary with you.

                    Our mission is to provide you with delicious recipes, insightful cooking tips, and entertaining food-related content that will inspire you to get creative in the kitchen. Whether you are a seasoned chef or just starting out, our website has something for everyone.
                </p>

                <p className='fw-semibold'>
                    Our team consists of experienced chefs and culinary professionals who are committed to bringing you the very best in food content. We have a wealth of knowledge and expertise in a variety of cuisines, cooking techniques, and dietary needs, so you can trust us to provide you with reliable information and delicious recipes that you can count on.
                </p>

                <p className='fw-semibold'>
                    We believe that cooking should be fun, approachable, and accessible to everyone, which is why we strive to make our content easy to understand and follow. We want to empower you to create delicious meals at home, whether you are cooking for yourself or entertaining guests.
                </p>
                <p className='fw-semibold'>
                    So whether you are looking for healthy meal ideas, indulgent desserts, or expert cooking advice, our website has everything you need to elevate your cooking game. Thank you for joining us on this culinary journey, and we look forward to sharing our love of food with you!
                </p>
            </div>
        </Container>
    );
};

export default About;