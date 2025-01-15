import './TextArea.css';

const TextArea = ({label, value, onChange, placeholder}) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className="text-area">
            <label>{label}</label>
            <textarea
                value={value}
                onChange={handleChange} 
                placeholder={placeholder}>
            </textarea>
        </div>
    );
};

export default TextArea