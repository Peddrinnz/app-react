import Colaborator from '../Colaborator';
import './Team.css';

const Team = ({ name, corPrimaria, corSecundaria, devs, toDelete }) => {
    if (devs.length === 0) return null;

    return (
        <section className='team' style={{ backgroundColor: corSecundaria }}>
            <input
                value={corSecundaria}
                type='color'
                className='input-color'
                readOnly
            />
            <h3 style={{ borderColor: corPrimaria }}>{name}</h3>
            <div className='line'>
                {devs.map((dev, index) => (
                    <Colaborator
                        key={index}
                        backgroundColor={corPrimaria}
                        name={dev.name}
                        role={dev.role}
                        age={dev.age}
                        interest={dev.interest}
                        delete={toDelete}
                    />
                ))}
            </div>
        </section>
    );
};

export default Team;
