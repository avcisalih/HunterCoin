import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align-items-center ">
      <Link
        to={"/home"}
        className="d-flex gap-3 align-items-center text-decoration-none"
      >
        <img src="./coin.png" height={40} />
        <h3 className=" text-light ">HunterCoin</h3>
      </Link>

      <nav className="d-flex gap-3">
        <NavLink to={"/"} className={" text-light text-decoration-none"}>
          Giriş Yap
        </NavLink>
        <NavLink to={"/home"} className={" text-light text-decoration-none"}>
          Anasayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
