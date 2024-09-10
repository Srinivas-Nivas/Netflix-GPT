export const checkValidData = (email, Password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if(!isEmailValid) return "Please Enter a Valid Email Address";
    if(!isPasswordValid) return "Please Enter a Valid Password";

    return null;

}

