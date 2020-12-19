import React from 'react';
import { Accordion, OptForm } from '../components';
import FaqsData from '../fixtures/faqs.json';

export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
            {FaqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your e-mail to create or re-start your membership</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}