import React from 'react';
import { Footer } from '../components';

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Questions? Contact Us</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to watch</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Text>Netflix Nigeria</Footer.Text>
        </Footer>
    )
}