import { FormGroup, Input, Label, Alert } from "reactstrap";
export const SelectInput = ({
  value,
  name,
  onChange,
  placeholder,
  items,
  error,
}) => {
  return (
    <FormGroup className="">
      <Label for={name}>{placeholder} </Label>
      <Input
        type="select"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      >
        {items.map((v) => (
          <option defaultValue={v.id} key={v.id} value={v.id}>{v.categoryName}</option>
        ))}
      </Input>
      {error && <Alert color="danger">{error}</Alert>}
    </FormGroup>
  );
};
