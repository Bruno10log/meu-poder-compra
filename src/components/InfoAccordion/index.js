import React, { useState } from 'react';
import { Accordion } from './styles';

export default function InfoAccordion() {

    const[open, setOpen] = useState(false);

    function openAccordion() {
        setOpen(open => !open);
    }

    return(
        <Accordion expand={open}>
            <button onClick={openAccordion}>
                Expand
            </button>
            <div>
                <p>
                    blablabla
                </p>
            </div>
        </Accordion>
    );

}