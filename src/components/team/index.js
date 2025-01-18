import './Team.css';

const Team = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        <section className='team' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
        </section>
    )
}

export default Team