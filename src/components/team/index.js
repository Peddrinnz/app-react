import Colaborator from '../Colaborator';
import './Team.css';

const Team = (props, toDelete) => {
    const css = { backgroundColor: props.corSecundaria };

    return (
        props.devs.length > 0 ? (<section className='team' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
            <div className='line'>
            {props.devs.map((dev, index) => {
                return <Colaborator
                backgroundColor={props.corPrimaria}
                key={index}
                name={dev.name}
                role={dev.role}
                age={dev.age}
                interest={dev.interest}
                delete={toDelete}
            />
            })}
            </div>
        </section>
        ) : null
    );
};

export default Team;
