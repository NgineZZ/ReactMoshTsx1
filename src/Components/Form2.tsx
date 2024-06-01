import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string,
  age: number
}

function Form2() {
  const {
    register,
    handleSubmit,    
    formState: { errors, isValid },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          {...register("name", { minLength: 3, required: true })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">This field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Must be 3 characters</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        <input
          {...register("age", { required: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">This field is required.</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Form2;
