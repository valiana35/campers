import { useField, Field, Form, Formik, useFormikContext } from "formik";
import { FiCalendar } from "react-icons/fi";
import css from "./CamperForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

const CamperForm = () => {
  const DatePickerField = ({ ...props }) => {
    const [field, , { setValue }] = useField(props);
    return (
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setValue(val);
        }}
      />
    );
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    date: Yup.string().required("Required"),
    comment: Yup.string().max(100),
  });

  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ username: "", email: "", date: "", comment: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="username"
            placeholder="Name"
            className={css.name}
          />
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={css.email}
          />
          <div className={css.dateBtn}>
            <DatePickerField
              closeOnScroll={true}
              name="date"
              minDate={new Date()}
              disabledKeyboardNavigation
              placeholderText="Booking date"
              className={css.date}
            />
            <span className={css.button}>
              <FiCalendar />
            </span>
          </div>
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={css.comment}
          />
          <button type="submit" className={css.btn}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CamperForm;
