import { Presentation } from "@/presentation/user/create";
import Form from "pages/__components__/form/form";
import Input from "pages/__components__/form/input";

const App = () => {
  const { onSubmit, validator } = Presentation();

  return (
    <Form onSubmit={onSubmit()}>
      email: <Input {...validator.emailRaw } /><br />
      confirm: <Input {...validator.emailConfirm } />
      {validator.emailRaw.errors && <span>{validator.emailRaw.errors}</span>}
      <Input {...{ type: "submit" }} />
    </Form>
  );
};
export default App;
