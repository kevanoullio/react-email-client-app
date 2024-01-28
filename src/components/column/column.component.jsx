import React from "react";
import "./column.styles.css";

const Column = ({ className, children }) => (
    <section className={className}>
        {children}
    </section>
);

export default Column;
