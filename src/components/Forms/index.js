import { useState } from 'react';
import Button from '../Button';
import ListSuspended from '../ListSuspended';
import TextArea from '../TextArea';
import TextField from '../TextField';
import './Forms.css';

const Forms = (props) => {

const [nome, setNome] = useState('')
const [idade, setIdade] = useState('')
const [formacao, setFormacao] = useState('')
const [interesse, setInteresse] = useState('')
const [time, setTime] = useState('')

const toSave = (event) => {
    event.preventDefault();
    if (nome !== '' && idade !== '' && formacao !== '' && interesse !== '' && time !== '') {
        props.devCadastrados({
            name: nome.trim(), 
            age: idade.trim(), 
            role: formacao.trim(), 
            interest: interesse.trim(), 
            time: time.trim(),
    });

    setNome('');
    setIdade('');
    setFormacao('');
    setInteresse('');
    setTime('');
}  else {
    alert('Preencha todos os campos');
    }
};

    return (
        <section className='forms'>
            <form onSubmit={toSave}>
                <h2>Preencha os dados para se cadastrar</h2>
                <TextField
                    mandatory={true}
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    values={nome}
                    changed={values => setNome(values)} 
                />
                <TextField 
                    mandatory={true} 
                    label="Idade" 
                    placeholder="Digite sua idade" 
                    values={idade}
                    changed={values => setIdade(values)}
                />
                <TextField 
                    mandatory={true} 
                    label="Formação" 
                    placeholder="Digite a sua formação"
                    values={formacao}
                    changed={values => setFormacao(values)} 
                />
                <TextArea
                    label="Por que se interessou por dev?" 
                    placeholder="Escreva aqui sua resposta"
                    value={interesse}
                    onChange={values => setInteresse(values)}
                />
                <ListSuspended 
                    mandatory={true} 
                    label="Qual seu time?"
                    options={props.teams}
                    values={time}
                    changed={values => {
                        console.log(values);
                        setTime(values.trim());
                    }}    
                />
                <Button>
                    cadastrar
                </Button>
            </form>
        </section>
    )
}

export default Forms