import { SelectInput } from "../toolbox/SelectInput";
import { TextInput } from "../toolbox/TextInput";
import { Form, Button } from "reactstrap";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../../redux/actions/category-actions";
import {
  saveProduct,
  updateProduct,
} from "../../redux/actions/product-actions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function AddOrUpdateProduct({
  products,
  onSave,
  onUpdate,
  categories,
  getCategories,
  ...props
}) {
  const [product, setProduct] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    const pro = products.find((v) => v.id === +productId);
    pro ? setProduct(pro) : setProduct({});
  }, [categories.length,getCategories,products,productId]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: value,
    }));
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: value === "" ? "Missing " + name : null,
    }));
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    product.id
      ? onUpdate(product).then(() => navigate("/"))
      : onSave(product).then(() => navigate("/"));
  };

  return (
    <div>
      <h3>{product.id === undefined ? "Create" : "Update"} Product</h3>
      <Form>
        <TextInput
          value={product.productName??""}
          name="productName"
          placeholder="Product Name"
          error={errors.productName ?? ""}
          onChange={(e) => onChangeHandler(e)}
          type="text"
        ></TextInput>
        <SelectInput
          name="categoryId"
          placeholder="Category ID"
          error={errors.categoryId ?? ""}
          items={categories}
          onChange={(e) => onChangeHandler(e)}
        ></SelectInput>
        <TextInput
          value={product.quantityPerUnit??""}
          name="quantityPerUnit"
          placeholder="Quantity Per Unit"
          error={errors.quantityPerUnit ?? ""}
          onChange={(e) => onChangeHandler(e)}
          type="text"
        ></TextInput>
        <TextInput
          value={product.unitPrice??""}
          name="unitPrice"
          placeholder="Unit Price"
          error={errors.unitPrice ?? ""}
          onChange={(e) => onChangeHandler(e)}
          type="number"
        ></TextInput>
        <TextInput
          value={product.unitsInStock??""}
          name="unitsInStock"
          placeholder="Units In Stock"
          error={errors.unitsInStock ?? ""}
          onChange={(e) => onChangeHandler(e)}
          type="number"
        ></TextInput>
        <Button onClick={(e) => onSaveHandler(e)} color="success">
          {product.id === undefined ? "Save" : "Update"}
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.getCategoriesReducer,
    products: state.getProductsReducer,
  };
};

const mapDispatchToProps = {
  getCategories,
  onSave: saveProduct,
  onUpdate: updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
