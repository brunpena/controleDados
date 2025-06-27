import React, { useState, useEffect } from 'react';
import * as C from './index.styles';

export const AreaIA = ({ item }) => {
    const [analiseIA, setAnaliseIA] = useState('Gerando análise...');

    useEffect(() => {
        const gerarAnaliseFinanceira = async (data) => {
            const prompt = `Faça uma análise financeira detalhada dos seguintes dados: ${JSON.stringify(data)}. Considere os valores, categorias (todas em pt-br) e datas para fornecer insights sobre a situação financeira, de forma sucinta em um texto. (ex.: A sua saúde financeira está boa!; Você está gastando demais com lazer!; etc. Escreva textos curtos sem estilização(Sem título, apenas textos sem (**)), mas que sejam suficientes para entender. Se não houverem dados a ser analisados, apendas responda com Aguardando transações para serem analisadas)`;

            try {
                const resposta = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDIflOfKYm9Rq4P_NjjTYMiiWKEIRsUKiQ", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        contents: [{
                            parts: [{ text: prompt }]
                        }]
                    }) 
                });

                const dados = await resposta.json();
                const texto = dados.candidates?.[0]?.content?.parts?.[0]?.text || 'Não foi possível gerar a análise.';
                return texto;
            } catch (error) {
                console.error("Erro ao gerar análise:", error);
                return 'Ocorreu um erro ao gerar a análise.';
            }
        };

        if (item) { // 
            setAnaliseIA('Gerando análise...'); 
            gerarAnaliseFinanceira(item)
                .then(result => {
                    setAnaliseIA(result);
                })
                .catch(error => {
                    console.error("Erro na promise da análise:", error);
                    setAnaliseIA('Ocorreu um erro ao carregar a análise.');
                });
        } else {
            setAnaliseIA('Nenhum dado para analisar.');
        }
    }, [item]); 

    return (
        <C.Container>
            <C.Analise>Análise Por IA</C.Analise>
            <C.Result>{analiseIA}</C.Result>
        </C.Container>
    );
};