const navStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  padding: "30px",
  listStyleType: "none",
  flexDirection: "column",
  backgroundColor: "white",
  color: "black",
  width: "450px",
  height: "100vh",
};

const divStyles = {
  display: "flex",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <div style={divStyles}>
        <nav style={navStyles}>
          <li>Blog</li>
          <li>Dashboard</li>
          <li>Ismail Dincer</li>
        </nav>
        {children}
      </div>
    </>
  );
}
