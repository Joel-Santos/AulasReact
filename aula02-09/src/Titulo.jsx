import { useState } from "react"

function Titulo({ nome, idade }) {
    // let texto = "Esse é um texto de exemplo"
    // const url = 'https://difusora95.com.br/wp-content/uploads/2016/05/02-06-senac.jpg'
    const [texto, setTexto] = useState("Titulo Inicial");
    const [inputText, setInputText] = useState("");
    function clicou() {
        setTexto(inputText);
    }
    return (
        <div>
            {/* <h1>Oi me chamo {nome ? nome : 'Fulano'} tenho {idade ? idade : 'X' } anos. </h1> */}
            <h1> {texto} </h1>
            <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
            {/* <button onClick={()=> {setTexto("Mudei quando clicaram no botão")}}>Mudar</button> */}
            <button onClick={clicou}>Mudar</button>
            {/* <img src={url} width={150} /> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequuntur, et, esse, nesciunt adipisci aut sequi minus nemo fugiat cupiditate debitis rerum cum quas incidunt fuga? Odio aliquid quia consequatur.</p>
        </div>
    )
}
export default Titulo