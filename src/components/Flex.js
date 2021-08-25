import "./Flex.css";

function Flex({ children, row = false, column = false, wrap = false, justify = false, align = false, style = {}, className="" }) {
    const classDetails = `d-flex flex-${row ? "row" : "column"}${wrap ? " flex-wrap" : ""}${justify ? " justify-" + justify : ""}${align ? " align-" + align : ""} ${className}`;

    return <div className={classDetails} style={style}>{children}</div>;
}

export default Flex;
