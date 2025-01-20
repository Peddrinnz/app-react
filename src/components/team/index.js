import Colaborator from '../Colaborator';
import './Team.css';

const Team = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        <section className='team' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
            {props.devs.map(dev =>
                <Colaborator 
                    key={dev.id} 
                    name={dev.name} 
                    role={dev.role} 
                    interest={dev.interest} 
            />)}
        </section>
    )
}

export default Team