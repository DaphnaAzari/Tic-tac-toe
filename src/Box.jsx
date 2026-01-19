import "./Box.css"

export default function Box({ id, value, handleClick }) {
    return (
        <div
            className="Box"
            onClick={() => handleClick(id)}>
            {value}
        </div>
    );
}