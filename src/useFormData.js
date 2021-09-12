import { useState } from "react";

function useFormData(initialValue) {
  const [formData, setFormData] = useState(initialValue);

  function updateFormData(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  function clearFormData() {
    setFormData(initialValue);
  }

  return [formData, updateFormData, clearFormData];
}

export default useFormData;
