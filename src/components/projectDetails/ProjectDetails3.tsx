import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails3 = () => {
  const images = [
    "/project3/homepage.png",
    "/project3/all-toys.png",
    "/project3/toys-details.png",
    "/project3/add-toy.png",
  ];
  return (
    <div>
      <Card className="max-w-3xl mx-auto mt-6 shadow-lg bg-white dark:bg-[#020817]">
        <CardHeader>
          <CardTitle className="text-xl">Animalto Toyasium</CardTitle>
          <p className="text-muted-foreground text-sm">
            A frontend e-commerce web app using MERN stack to show different
            toys for kids.
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
            <li>Post new toys with photo and detailed information.</li>
            <li> Mobile responsive UI.</li>
            <li>Imagebb used for image hosting.</li>
            <li>Responsive UI with Tailwind CSS</li>
            <li>Users can add there products to the website</li>
            <li>
              {" "}
              Live Site:{" "}
              <Link
                className="underline"
                href="https://venerable-halva-459ef0.netlify.app/"
              >
                https://venerable-halva-459ef0.netlify.app/
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetails3;
