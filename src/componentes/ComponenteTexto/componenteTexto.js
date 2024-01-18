import './ComponenteTexto.css'

const ComponenteTexto = (props) => {

    const placeHolderModificada = `${props.placeholder}`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="componente-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolderModificada} />
        </div>
    )
}

export default ComponenteTexto;