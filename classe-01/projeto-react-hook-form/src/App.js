import './App.css';
import { useForm } from 'react-hook-form';
import { Input } from './components/Input';

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  function onSubmit(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Título:</label>
        <Input id="title" {...register('title', { required: true, minLength: 5 })} />
        {errors.title?.type === 'required' && <span>O campo 'Título' é obrigatório!</span>}
        {errors.title?.type === 'minLength' && <span>O campo 'Título' deve ter no mínimo 5 caracteres!</span>}

        <label htmlFor="body">Corpo:</label>
        <Input id="body" {...register('body', { required: true, maxLength: 30 })} />
        {errors.body?.type === 'required' && <span>O campo 'Corpo' é obrigatório!</span>}
        {errors.body?.type === 'maxLength' && <span>O campo 'Título' deve ter no máximo 30 caracteres!</span>}

        <label htmlFor="user-id">ID:</label>
        <Input id="user-id" {...register('userId', { required: true, valueAsNumber: true })} />
        {errors.userId?.type === 'required' && <span>O campo 'ID' é obrigatório!</span>}
        {errors.userId?.type === 'valueAsNumber' && <span>O campo 'ID' deve ser numérico!</span>}

        <button type="submit">Enviar</button>
      </form>
    </div >
  );
}

export default App;