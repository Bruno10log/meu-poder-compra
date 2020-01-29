import React from 'react';
import { Title }  from './styles.js'
import { useTranslation } from 'react-i18next';
 
export default function Header() {

    const { t } = useTranslation('common');

    return(
        <>
            <Title>
                { t('header') }
            </Title>
        </>
    );
}