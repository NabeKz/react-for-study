import Form from "@/presentation/shared/component/form";
import Input, { InputProps } from "@/presentation/shared/component/input";
import { Presentation } from "@/presentation/user/create";

const App = () => {
  const { onSubmit, register, errors } = Presentation();

  const example = InputProps({
    placeholder: "test",
    register: register("example"),
  });

  const exampleRequired = InputProps({
    register: register("exampleRequired", { required: true }),
  });

  return (
    <Form onSubmit={onSubmit()}>
      <Input {...example} />
      <Input {...exampleRequired} />
      {errors.exampleRequired && <span>This field is required</span>}
      <Input {...{ type: "submit" }} />
    </Form>
  );
};
export default App;
