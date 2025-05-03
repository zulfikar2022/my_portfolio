import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/project1/home-hunt.png",
  "/project1/login.png",
  "/project1/signup.png",
  "/project1/admin-dashboard.png",
  "/project1/admin-dashboard-2.png",
];

export default function ProjectDetails1() {
  return (
    <Card className="max-w-3xl mx-auto mt-6 shadow-lg bg-white dark:bg-[#020817]">
      <CardHeader>
        <CardTitle className="text-xl">Home Hunt</CardTitle>
        <p className="text-muted-foreground text-sm">
          A rental platform inspired by Airbnb.
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

        <ul className="list-disc pl-4 text-sm text-muted-foreground">
          <li>Post rental properties with images and detailed information.</li>
          <li> Search for homes by location, price, and bedrooms.</li>
          <li>
            Tenants can request to rent a house; landlords can approve or reject
            requests.
          </li>
          <li>
            Tenants can request to rent a house; landlords can approve or reject
            requests.
          </li>
          <li>Cloudinary for image hosting</li>
          <li>
            Stripe integration allows tenants to complete payments securely.
          </li>
          <li className="">
            Live Site:{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://home-hunt-frontend.vercel.app/"
            >
              https://home-hunt-frontend.vercel.app/
            </Link>
          </li>
          <li className="">
            Frontend Source Code:{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://github.com/zulfikar2022/home-hunt-frontend"
            >
              https://github.com/zulfikar2022/home-hunt-frontend
            </Link>
          </li>
          <li className="">
            Backend Source Code:{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://github.com/zulfikar2022/home-hunt-backend"
            >
              https://github.com/zulfikar2022/home-hunt-backend
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
