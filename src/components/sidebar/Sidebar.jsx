import "./style.css";
import React from "react";
import { Item } from "./Item";
import { NavLink } from "react-router-dom";
import {DatosItems} from './DatosItems'

export const Sidebar = () => {
    return (
        <>
            <div className="sidebar-content bg-sky-600">
                <div className="sidebar-brand-content">
                    <NavLink className="sidebar-brand-text" to="/">
                    <i class="fi fi-rr-bolt pr-1"></i>
                        SimplePOS
                    </NavLink>
                </div>
                <div className="sidebar-items-content">
                    {DatosItems.map((item) => (
                        <Item item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};
