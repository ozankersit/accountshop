import React from "react";
import Button from "../../../components/features/Button";

const SupportForm = () => {
  return (
    <div className="p-12 flex justify-center items-center">
      <a href="mailto:ozankersit@gmail.com">
        <Button
          type="submit"
          color="#0038FF"
          radius="7px"
          className="py-2.5 px-6 mb-12"
        >
          {" "}
          <span className="text-white">Send Email</span>{" "}
        </Button>
      </a>
    </div>
  );
};

export default SupportForm;
