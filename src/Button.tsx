/* eslint-disable @typescript-eslint/no-unused-vars */
// type buttonProp = {
//   type: 'submit' | 'reset' | 'button';
//   autoFocus: boolean;

// };
type User = {
  sessionId: string;
  name: string;
};
type Guest = Omit<User, 'name'>; // sessionID

// const convertToArray = <T,>(value: T): T[] => {
//   return [value];
// };

//generics
function convertToArray<T>(value: T): T[] {
  return [value];
}
convertToArray('Array');
convertToArray(3);
type buttonProp = React.ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
};

//unknown value
// (data:unknown)

const Button = ({ type, autoFocus, ...rest }: buttonProp) => {
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>
      Button
    </button>
  );
};
export default Button;
