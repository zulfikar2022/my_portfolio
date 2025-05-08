import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/project2/home-page.png",
  "/project2/all-products.png",
  "/project2/buy-product.png",
];

export default function ProjectDetails2() {
  return (
    <Card className="max-w-3xl mx-auto mt-6 shadow-lg bg-white dark:bg-[#020817]">
      <CardHeader>
        <CardTitle className="text-xl">Best Bikes</CardTitle>
        <p className="text-muted-foreground text-sm">
          A full-stack e-commerce web app using MERN stack and Shurjopay as
          payment gateway for selling bikes.
        </p>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-4 mt-3">
        {/* Scrollable image row */}
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-[300px] flex-shrink-0 rounded-md overflow-hidden border"
            >
              <Image
                src={src}
                alt={`Screenshot ${index + 1}`}
                width={300}
                height={180}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold">Technologies Used</h3>
        <ul className="list-disc pl-4 text-sm text-muted-foreground">
          <li>React</li>
          <li>Typescript</li>
          <li>Express</li>
          <li>Ant Design</li>
          <li>React Router Dom</li>
          <li>Mongodb</li>
          <li>Mongoose</li>
          <li>JWT</li>
          <li>Shurjopay</li>
        </ul>

        <h3 className="text-lg font-semibold">Features</h3>
        <ul className="list-disc pl-4 text-sm text-muted-foreground">
          <li>User auth with JWT.</li>
          <li> Add to cart & place orders.</li>
          <li>Admin can manage products & users.</li>
          <li>Responsive UI with Tailwind CSS</li>
          <li>Cloudinary for image hosting</li>
          <li>Shurjopay as payment gateway integrated.</li>
        </ul>

        <h3 className="text-lg font-semibold">Links</h3>
        <ul className="list-disc pl-4 text-sm text-muted-foreground">
          <li className="">
            Live Site:{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://coruscating-bonbon-3879b6.netlify.app/"
            >
              https://coruscating-bonbon-3879b6.netlify.app/
            </Link>
          </li>
          <li className="">
            Frontend Source Code:{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://github.com/zulfikar2022/assignment-4-frontend"
            >
              https://github.com/zulfikar2022/assignment-4-frontend
            </Link>
          </li>
          <li className="">
            Backend Source Code:{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://github.com/zulfikar2022/assignment-4-backend"
            >
              https://github.com/zulfikar2022/assignment-4-backend
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
