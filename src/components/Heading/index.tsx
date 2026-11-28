import { Link } from "react-router";
import "./heading.css";
import { MdAccountCircle } from "react-icons/md";
import { IoLogoGameControllerA, IoMdCreate } from "react-icons/io";

interface HeadingProps {
  texto: string;
}

export function Heading({ texto }: HeadingProps) {
  return (
    <>
      <header>
        <h1>{texto}</h1>

        <div className="icons">
          <div className="icons-container">
            {" "}
            <Link to={"/login"}>
              <MdAccountCircle size={30} color="white" />
            </Link>
            <Link to={"/make"}>
              <IoMdCreate size={30} />
            </Link>
            <Link to={"/"}>
              <IoLogoGameControllerA size={30} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
