import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container text-center pt-20 flex flex-col items-center">
        <h1 className="text-yellow-300 text-5xl font-bold uppercase">
          Smart Vision
        </h1>
        <span className="my-4 text-xl lg:w-[70%] text-center">
          Welcome to SmartVision, the cutting-edge web application
          revolutionizing image classification. With our advanced algorithms and
          state-of-the-art machine learning techniques, SmartVision empowers
          users to effortlessly classify and categorize images with unparalleled
          accuracy.
        </span>
      </section>

      <section className="grid xl:grid-cols-2 container place-items-center mt-12 lg:w-[70%] sm:grid-cols-1 sm:gap-[20px]">
        <Card
          linkto="covid"
          image={"/images/covid19.jpg"}
          title={"Covid 19 prediction"}
          description={"Lets Predict The Covid 19 Using Xray images "}
        />
          <Card
          linkto="cat-dogs"
          image={"/images/cat.jpg"}
          title={"Cat or Dog Prediction"}
          description={"Lets Predict The Covid 19 Using Xray images "}
        />
          {/* <Card
          linkto="fruit"
          image={"/images/fruit.jpg"}
          title={"Fruit Prediction"}
          description={"Lets Predict The Covid 19 Using Xray images"}
        /> */}
      </section>
    </>
  );
}
