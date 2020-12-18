import React from 'react';
import { Accordion } from '../components';
import FaqsData from '../fixtures/faqs.json';

export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {FaqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}