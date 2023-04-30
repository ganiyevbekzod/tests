import "./user-card.css"

const UserCard = (props) => {
    return (
        <div>
            <li className="mb-5 p-5 pb-5 shadow">
                <div className="item_content d-flex align-items-center   ">
                    <img className="logoImg" src={props.logo} alt="pictures" />
                    <div className="item_wrapper ms-5  ">
                        <div className="d-flex align-items-center">
                            <p className="company_text fs-4 fw-bold ">{props.company}</p>
                            <p className={props.new===true?"text fw-bold rounded text-white  pt-1 pb-1 ps-2 pe-2 ms-3 ":"d-none"}>{props.new===true?"New":""}</p>
                            <p className={props.featured===true?"text fw-bold rounded  text-white bg-black pt-1 pb-1 ps-2 pe-2 ms-3":"d-none"}>{props.featured===true?"Featured":""}</p>
                        </div>
                        <h4 className="posotion_title title fw-bold ">{props.position}</h4>
                        <div className="item_day d-flex align-items-center">
                            <p className="me-2 mb-0">{props.postedAt}</p>
                            <span style={{ "display": "block", "width": "5px", "height": "5px", }} className="d-inline rounded-circle me-2  bg-black"></span>
                            <p className="me-2 mb-0">{props.contract}</p>
                            <span style={{ "display": "block", "width": "5px", "height": "5px", }} className="d-inline rounded-circle me-2  bg-black"></span>
                            <p className="me-2 mb-0">{props.location}</p>
                        </div>
                    </div>
                    <div className="item_btn d-flex align-items-center  ms-auto  ">
                        <button className="button btn ms-4 fw-bold fs-6  border p-1 " onClick={(evt) => props.handleClick(evt)} >{props.role}</button>
                        <button className="button btn ms-4 fw-bold fs-6  border p-1 " onClick={(evt) => props.handleClick(evt)} >{props.level}</button>
                        {props.languages.map(item => (
                            <button className="button btn ms-4 fw-bold fs-6  border p-1 " key={item.id} onClick={(evt) => props.handleClick(evt)}>{item}</button>
                        ))}
                        {/* <button className="button btn ms-4 fw-bold fs-6  border p-1 ">{props.languages[1]}</button>
                    <button className="button btn ms-4 fw-bold fs-6  border p-1 ">{props.languages[2]}</button> */}
                    </div>
                </div>
            </li>
        </div>
    )
}
export default UserCard