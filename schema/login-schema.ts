import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required."),
  password: Yup.string().required("Password is required."),
});

export const categorySchema = Yup.object().shape({
  category: Yup.string().required("Category Name is required."),
});
export const expenseSchema = Yup.object().shape({
  category: Yup.string().required("Category Name is required."),
  title: Yup.string().required("Title is required"),
  marchantname: Yup.string().required("Marchant Name is required"),
  amount: Yup.string().required("Amount is required"),
  date: Yup.string().required("Date is required"),
  description: Yup.string().required("Description is required"),
  tax: Yup.string().required("Tax is required"),
  image: Yup.mixed().required("Image is required"),
});
