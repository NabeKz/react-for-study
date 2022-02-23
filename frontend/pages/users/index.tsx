import { UserPresentation } from "@/presentation/user";

const App = () => {
  const { state, onInputName, onUpdateView } = UserPresentation();
  return (
    <>
      <div>
        <h1>Current name is {state.name}</h1>
        name: <input type="text" onInput={onInputName} value={state.name} />
        <button onClick={onUpdateView}>create</button>
      </div>
    </>
  );
};
export default App;
