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
                O que é poder de compra?
            </button>
            <div>
                <p>
                {
                    `
                    Em economia a paridade do poder de compra (PPC) ou paridade do poder aquisitivo (PPC-teoria de longo prazo), é um método alternativo à taxa de câmbio para se calcular o poder de compra de dois países. A teoria da paridade de poder de compra (PPC) foi originalmente formulada pelo economista sueco Gustav Cassel que definiu que a taxa de câmbio de um país tende a se desvalorizar na mesma proporção que aumenta o nível dos preços. [1] Assim, a PPC procura medir o quanto uma determinada moeda pode comprar em termos internacionais (normalmente dólar), já que bens e serviços têm diferentes preços de um país para outro, ou seja, relaciona o poder aquisitivo de tal pessoa com o custo de vida do local, se ele consegue comprar tudo que necessita com seu salário.
                    
                    `
                }
                </p>
            </div>
        </Accordion>
    );

}