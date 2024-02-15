import { FormGroup, Input, Label, Alert } from "reactstrap";
export const TextInput = ({ value, name, onChange, placeholder, type, error }) => {
  return (
    <FormGroup className="">
      <Label for={name}>{placeholder} </Label>
      <Input
      type={type} 
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      ></Input>
      {error && <Alert color="danger">{error}</Alert>}
    </FormGroup>
  );
};
