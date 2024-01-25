import './AddTask.css';

function AddTask({ input, onChangeInput, onAdd }) {

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(input, "", false);
    onChangeInput('');
  }

  const onChange =(e) => onChangeInput(e.target.value);

  return (
    <div className="add_task">
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange} placeholder="할일 입력 후 엔터를 누르세요." />
        <button type='submit'>할일 추가</button>
      </form>
    </div>
  );
}

export default AddTask;
