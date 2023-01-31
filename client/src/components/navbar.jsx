import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="maindiv">
                <span className="choira">choira</span>

                <span className="friday" style={{ marginLeft: '40%' }}> Friday Night Jam </span>

                <select name="cars" id="cars" style={{ float: "right" }}>
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <div className="invite" style={{ float: "right" }}>
                    <span className="plus"> + </span> <span style={{ color: 'yellow' }}> Invite </span>
                </div>
            </div>
        </>
    )
}