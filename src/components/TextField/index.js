import './TextField.css';

const TextField = (props) => {

    const typed = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.values} onChange = {typed} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField