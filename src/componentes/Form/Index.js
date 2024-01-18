import { useState } from 'react';
import Botao from '../Botao';
import ComponenteTexto from '../ComponenteTexto/componenteTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Form.css'


const Form = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const salvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return (
        <section className='formulario'>
            <form onSubmit={salvar}>
                <h2>Digite os Dados do Colaborador</h2>
                <ComponenteTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu Nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />                    
                <ComponenteTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite seu Cargo'
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <ComponenteTexto 
                label='Imagem' 
                placeholder='Digite o caminho da imagem'
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label='Time' 
                itens={props.times}
                valor={time}
                aoAlterado={ valor => setTime(valor)}
                />
                <Botao>

                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Form;