import Button from '../Button';
import ListSuspended from '../ListSuspended';
import TextArea from '../TextArea';
import TextField from '../TextField';
import './Forms.css';

const Forms = () => {

    const teams = [
    'Front-End', 
    'Back-End', 
    'Full-Stack', 
    'Data Science', 
    'UX e Design', 
    'Mobile', 
    'Inovação e Gestão'
    ]

const toSave = (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
}  

    return (
        <section className='forms'>
            <form onSubmit={toSave}>
                <h2>Preencha os dados para se cadastrar</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" />
                <TextField mandatory={true} label="Idade" placeholder="Digite sua idade" />
                <TextField mandatory={true} label="Formação" placeholder="Digite a sua formação" />
                <TextArea
                label="Por que se interessou por dev?" 
                placeholder="Escreva aqui sua resposta"
                />
                <ListSuspended mandatory={true} label="Qual seu time?" options={teams}/>
                <Button>cadastrar</Button>
            </form>
        </section>
    )
}

export default Forms