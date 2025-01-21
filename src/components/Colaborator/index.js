import './Colaborator.css';

const Colaborator = ( {name, role, age, interest, backgroundColor} ) => {
    return (
        <div className='colaborator'>
            <div className='name_age' style={{ backgroundColor: backgroundColor }}>
                <h4>{name}</h4>
                <h4>{age}</h4>
            </div>
            <div className='role'>
                <h5>{role}</h5>
                <p>{interest}</p>
            </div>   
        </div>
    )
}

export default Colaborator
        