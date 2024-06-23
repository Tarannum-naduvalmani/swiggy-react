const heading = React.createElement("h1",{id:"heading"},"this ia an h1 tag");

console.log(heading);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);