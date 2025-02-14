import "../style/loader.css";

const Loader = (props) => {
  return (
    <div className="wrapper" {...props}>
      <div className="loading"></div>
      <p>{props.children}</p>
    </div>
  );
};

export default Loader;
