import React from 'react';
import { Footer } from '../components';

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Questions? Contact Us</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
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