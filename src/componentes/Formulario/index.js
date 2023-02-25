import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome , setNome] = useState('')
    const [cidade , setCidade] = useState('')
    const [imagem , setImagem] = useState('')
    const [time , setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cidade,
            imagem,
            time
        })
        setNome('')
        setCidade('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar seu card de torcedor</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}    
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cidade" 
                    placeholder="Digite sua cidade"
                    valor = {cidade}
                    aoAlterado = {valor => setCidade(valor)} 
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)} 
                />
                <Botao>
                    Registrar
                </Botao>
            </form>
        </section>

    )
}

export default Formulario

//Se usasse onClick nao teria a validação do formulario
//Usando o onSubmit eu consigo aplicar regras de preenchimento do formulario depois
//Na função aoSalvar, eu to prevenindo o evento padrao de submit do JS, senao ele nao deixa eu executar o que eu quero. 
//E nesse caso ele deixou de recarregar a pagina automaticamento quando clico no botao.