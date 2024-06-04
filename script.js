const inputs = document.querySelectorAll("input");
const paragraph = document.querySelectorAll("paragraph");
const patterns = {
  firstname: /^[a-z]/i,
  lastname: /^[a-z]/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[a-z\d]{5,12}$/i,
};
const testCase = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const string = "test";
testCase.test("test");
string.match(testCase);

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

for (let input of inputs) {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
}
