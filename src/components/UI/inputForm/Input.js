import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="d-flex align-items-center">
      <i class="bi bi-dash-square-fill me-2 fs-3 text-secondary" />
      <input
        {...props.input}
        className=" form-control shadow-none w-50"
        ref={ref}
      />
      <i class="bi bi-plus-square-fill ms-2 fs-3 text-danger" />
    </div>
  );
});

export default Input;
