import Image from "../images/error_404.jpg";

const PageNotFound = () => {
  return (
    <div className="h-[75vh] flex items-center justify-center">
      <MyImage src={Image} alt={"Page not found"} />
    </div>
  );
};

function MyImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-contain" />;
}


export default PageNotFound;
