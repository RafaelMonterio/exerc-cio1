import styles from "./Cartao.module.css"

function Cartao(props){
    return(
        <div>
            <img src={props.imagem} alt= "Imagem"></img>
            <h2> Olá {props.nome} <b>{props.name}</b></h2>

            <p className={styles.perfil}> Titulo: {props.descrição}</p>
        </div>
    )

}

export default Cartao;