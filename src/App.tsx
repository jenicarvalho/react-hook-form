import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }; 

  const exterior = watch("exterior");


  return (
    <div className="App">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Exterior?</label>
      <input name="exterior" type="checkbox" ref={register} />
      {exterior && (
        <div>
          <label>País</label>
          <input type="text" name="pais" ref={register} />
        </div>
      )}
      <input name="nome" ref={register({ required: true })} placeholder="nome"/>
      {errors.nome && <p>Nome obrigatório</p>}

      <label>Masc</label>
      <input type="radio" ref={register} name="sexo" value="masculino" />
     
      <label>Fem</label>
      <input type="radio" ref={register} name="sexo" value="feminino" />
     
      <label>aceito os termos</label>
      <input type="checkbox" ref={register} name="aceito" />
      
      <button>enviar</button>
    </form>
    </div>
  );
}

export default App;
