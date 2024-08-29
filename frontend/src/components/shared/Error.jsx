import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useRouteError } from "react-router-dom";
import ErrorImage from "../../images/error.jpg";

const Error = () => {
  const error = useRouteError();
  console.log(error.message);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <MyImage src={ErrorImage} alt={"Error"} />
      </div>
      <div>
        <h1>{error.message}</h1>
      </div>
    </div>
  );
};

function MyImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      fill
      className="h-1/2 w-1/2 rounded-md object-cover"
    />
  );
}

export default Error;
