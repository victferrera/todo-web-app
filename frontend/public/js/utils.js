export const clearForm = (formName) => {
    let resetForm = document.getElementById(formName);
    resetForm.reset();
}