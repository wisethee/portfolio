import "./index.css";

const Logo = () => (
  <a href="/" className="mp-logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={"auto"}
      fill="none"
      viewBox="0 0 64 44"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        strokeWidth={3}
        d="M35.91 13.852 22.221 2.444 2.666 41.555 35.91 13.852ZM41.777 22l19.556 13.037-27.378-9.126L41.777 22Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        strokeWidth={3}
        d="m2.666 41.555 39.11-32.592 19.556 26.074L41.777 22 2.666 41.555Z"
        clipRule="evenodd"
      />
    </svg>
  </a>
);
export default Logo;
