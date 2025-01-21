import './ListSuspended.css';

const ListSuspended = (props) => {
    const handleChange = (event) => {
        props.changed(event.target.value);
    };

    return (
        <div className='list-suspended'>
            <label>{props.label}</label>
            <select 
                required={props.mandatory} 
                value={props.values} 
                onChange={handleChange}
            >
                <option value="" disabled>
                    Selecione uma opção
                </option>
                {props.options && props.options.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ListSuspended;
