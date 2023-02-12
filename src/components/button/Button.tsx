import {ButtonProps} from "./ButtonProperties";

export const Button = (
    {
        innerRef, id, type, text, onClick, loading, style
    }: ButtonProps
) => {
    const classStyle = (type === 'button') ? `btn-${style}` : `btn-${type}-${style}`

    return (
        <button
            ref={innerRef}
            id={id}
            type={'button'}
            className={`btn ${classStyle} animate__animated animate__fadeIn`}
            onClick={onClick}
        >
            {loading?.value && <div className="spinner-border spinner-border-sm me-2" role="status"/>}
            {loading?.value ? loading.text : text}
        </button>
    )
}
