import React, { useState } from 'react';
import { Container, CalcButton, ResultContainer } from './styles';

export default function() {

    const [income, setIncome] = useState();
    const [price, setPrice] = useState();
    const [newIncome, setNewIncome] = useState();
    const [newPrice, setNewPrice] = useState();
    const [result, setResult] = useState();

    return(
        <>
            <Container>
                <div>
                    <div>
                        <h2>
                            Onde Moro
                        </h2>
               
                        <input value={income} 
                               onChange={(e)=> setIncome(e.target.value)} 
                               placeholder={'Salário'}
                               type="number" />
                        
                        <input value={price} 
                               onChange={(e)=> setPrice(e.target.value)}
                               placeholder={'Preço'} 
                               type="number" />
                    </div>
                    <div>
                        <h2>
                            Onde quero Morar
                        </h2>
               
                        <input value={newIncome} 
                               onChange={(e)=> setNewIncome(e.target.value)}
                               placeholder={'Salário'}
                               type="number" />
                
                        <input value={newPrice} 
                               onChange={(e)=> setNewPrice(e.target.value)} 
                               placeholder={'Preço'} 
                               type="number" />
            
                    </div>
                </div>                

                <CalcButton disabled={!(income && price && newIncome && newPrice)} onClick={calc}>Calcular</CalcButton>

                {result &&
                    <ResultContainer>
                        <label>Seu poder de compra irá aumentar em: { result.toFixed(2) } </label> 
                    </ResultContainer>
                }

            </Container>
        </>
    )

    function calc() {
        var calc1 = price / income;
        var calc2 = newPrice / newIncome;

        console.log('calc1', calc1);
        console.log('calc2', calc2);

        setResult(calc1 - calc2);
    }

}