import './card.css'

const Card = ({ props }) => {
    
    return (<div className='card'>
        <div className='container'>
            <h3 className='fluxName'>{props.name}</h3>
        
            <div className='description'>
                <h5>{props.description}</h5>
                <h5>{props.teams}</h5>
            </div>

        </div>

        <button>Ver Mais</button>

    </div>

    )
}

export default Card