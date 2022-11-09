export default function App(){
  return(
    <div> 
      <h1>Meu primeiro projeto</h1>
      <br/>

      {/* UTILIZAÇÃO DO COMPONENTE PASSANDO DIFERENTES PROPS */}
      <Aluno nome="Luccas Kayure" curso="FullStack Dev"/>
      <Aluno nome="Vick" curso="Front End Dev"/>

    </div>
  )
}

//COMPONENTE E SEUS PARAMETROS
function Aluno({nome, curso}){
  return(
    <div>
      <h2>Bem vindo {nome} </h2>      
      <h3>Curso Atual: {curso}</h3>
    </div>
  )
}