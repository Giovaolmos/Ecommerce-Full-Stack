import Link from 'next/link';

function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/home"> Home</Link>
      </li>
      <li>
        <Link href="/cart"> Cart</Link>
      </li>
      <li>
        <Link href="/user-dashboard"> Profile</Link>
      </li>
      <li>
        <Link href="/sign-in"> SignIn</Link>
      </li>
      <li>
        <Link href="sign-up"> SignUp</Link>
      </li>
    </ul>
  );
}
export default NavBar;
