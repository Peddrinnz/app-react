import './ListSuspended.css'

const ListSuspended = (props) => {
    return (
        <div className='list-suspended'>
            <label>{props.label}</label>
            <select>
                {props.options && props.options.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}
   
export default ListSuspended