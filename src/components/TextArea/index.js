import './TextArea.css';

const TextArea = ({label, value, onChange, placeholder}) => {
    return (
        <div className="text-area">
            <label>{label}</label>
            <textarea
                value={value}
                onChange={onChange} 
                placeholder={placeholder}>
                </textarea>
        </div>
    );
};

export default TextArea