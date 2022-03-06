import { Presentation } from "@/presentation/user/create";
import Form from "pages/__components__/form/form";
import Input from "pages/__components__/form/input";

const App = () => {
  const { onSubmit, validator, errors } = Presentation();

  return (
    <Form onSubmit={onSubmit()}>
      <Input {...validator.example } />
      <Input {...validator.exampleRequired } />
      {errors.exampleRequired && <span>This field is required</span>}
      <Input {...{ type: "submit" }} />
    </Form>
  );
};
export default App;
