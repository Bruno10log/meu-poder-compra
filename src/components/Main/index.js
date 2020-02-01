import React, { useState, useRef, useEffect } from 'react';
import { Container, CalcButton, ResultContainer } from './styles';
import { useTranslation } from 'react-i18next';

export default function() {

    const [income, setIncome] = useState();
    const [price, setPrice] = useState();
    const [newIncome, setNewIncome] = useState();
    const [newPrice, setNewPrice] = useState();
    const [result, setResult] = useState();
    const [powerPurchasing1, setPowerPurchasing1] = useState();
    const [powerPurchasing2, setPowerPurchasing2] = useState();

    const returnRef = useRef(null);

    const { t } = useTranslation('common');

    useEffect(() => {
        if(returnRef.current) {
            const pos = returnRef.current.offsetTop;
            window.scrollTo(0, pos);
        }
    }, [result]);

    return(     
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

            {(powerPurchasing1 && powerPurchasing2) &&
                <ResultContainer ref={returnRef}>
                    <label>
                        {
                            t('cost1') + ':' + powerPurchasing1.toFixed(2) + '%' +   
                            t('cost2') + ':' + powerPurchasing2.toFixed(2) + '%'
                        }
                    </label> 
                </ResultContainer>
            }

        </Container>

    )

    function calc() {
        setPowerPurchasing1((price / income) * 100);
        setPowerPurchasing2((newPrice / newIncome) * 100);
       
        setResult(powerPurchasing1 - powerPurchasing2);       
    }

}