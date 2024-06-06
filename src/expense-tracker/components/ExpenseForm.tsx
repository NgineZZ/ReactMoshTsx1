// import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Categories from "./Categories";

const Schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "This field is required." })
    .min(0.001)
    .max(100_000),
  category: z.enum(Categories, {
    errorMap: () => ({ message: "This field is required." }),
  }),
});
type ExpenseFormData = z.infer<typeof Schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(Schema) });
  return (
    <div>
      <form onSubmit={handleSubmit((d)=>{onSubmit(d), reset()})}>
        <div className="mb-3">
          <label htmlFor="description" className="form-labe">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {Categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
