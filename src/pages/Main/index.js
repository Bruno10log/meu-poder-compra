import React, { useState } from 'react';
import { Container, CalcButton, ResultContainer } from './styles';
import { useTranslation } from 'react-i18next';


export default function() {

    const [income, setIncome] = useState();
    const [price, setPrice] = useState();
    const [newIncome, setNewIncome] = useState();
    const [newPrice, setNewPrice] = useState();
    const [result, setResult] = useState();

    const { t } = useTranslation('common');

    return(
        <>
            <Container id="container">
                <div>
                    <div>
                        <h2>
                            {t('whereILive')}
                        </h2>
                        
                        <input value={income}
                               tabIndex={'1'} 
                               onChange={(e)=> setIncome(e.target.value)} 
                               placeholder={t('income')}
                               type="number" />
                        
                        <input value={price} 
                               tabIndex={'2'}
                               onChange={(e)=> setPrice(e.target.value)}
                               placeholder={t('price')} 
                               type="number" />
                    </div>
                    <div>

                        <span >
                            <h2>
                                {t('whereIwantToMove')}
                            </h2>
                        </span>
               
                        <input value={newIncome}
                               tabIndex={'3'} 
                               onChange={(e)=> setNewIncome(e.target.value)}
                               placeholder={t('income')}
                               type="number" />
                
                        <input value={newPrice}
                               tabIndex={'4'} 
                               onChange={(e)=> setNewPrice(e.target.value)} 
                               placeholder={t('price')} 
                               type="number" />
            
                    </div>
                </div>                
                
                <CalcButton tabIndex={'5'} 
                            disabled={!(income && price && newIncome && newPrice)} 
                            onClick={calc}>
                                { t('calc') }
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