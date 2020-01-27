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
            <Container id="container">
                <div>
                    <div>
                        <h2>
                            Onde Moro
                        </h2>
                        
                        <input value={income}
                               tabIndex={'1'} 
                               onChange={(e)=> setIncome(e.target.value)} 
                               placeholder={'Salário'}
                               type="number" />
                        
                        <input value={price} 
                               tabIndex={'2'}
                               onChange={(e)=> setPrice(e.target.value)}
                               placeholder={'Preço'} 
                               type="number" />
                    </div>
                    <div>

                        <span >
                            <h2>
                                Onde quero Morar
                            </h2>
                        </span>
               
                        <input value={newIncome}
                               tabIndex={'3'} 
                               onChange={(e)=> setNewIncome(e.target.value)}
                               placeholder={'Salário'}
                               type="number" />
                
                        <input value={newPrice}
                               tabIndex={'4'} 
                               onChange={(e)=> setNewPrice(e.target.value)} 
                               placeholder={'Preço'} 
                               type="number" />
            
                    </div>
                </div>                
                
                <CalcButton tabIndex={'5'} 
                            disabled={!(income && price && newIncome && newPrice)} 
                            onClick={calc}>
                                CALCULAR
                </CalcButton>

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