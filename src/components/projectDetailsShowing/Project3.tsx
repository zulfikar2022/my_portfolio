import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectThree = () => {
  return (
    <Card className=" bg-white dark:bg-[#020817] border border-muted-foreground/20 shadow-lg backdrop-blur-sm p-6 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Animalto Toyasium
        </CardTitle>
        <CardDescription className="text-base mt-2">
          Frontend focused e-commerce website with a modern design and smooth
          animations. And slight backend functionality like adding products,
          updating products and deleting products as well as login with google.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tech Stack */}
        <div>
          <h3 className="font-medium mb-2 text-muted-foreground">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React </Badge>
            <Badge variant="outline">Express</Badge>
            <Badge variant="outline">React Router DOM</Badge>
            <Badge variant="outline">MongoDB</Badge>
          </div>
        </div>

        {/* Core Features */}
        <div>
          <h3 className="font-medium mb-2 text-muted-foreground">
            Core Features
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Post new toys with photo and detailed information.</li>
            <li>Mobile responsive UI.</li>
            <li>Imagebb used for image hosting.</li>
            <li>Managing users through firebase.</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className=" md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3 pt-4">
          <Button size="sm">
            <Link
              href="https://venerable-halva-459ef0.netlify.app/"
              target="_blank"
            >
              Live Demo
            </Link>
          </Button>

          <Button size="sm" variant="outline">
            <Link
              href="https://github.com/zulfikar2022/animalto-toyasium"
              target="_blank"
            >
              Source Code
            </Link>{" "}
          </Button>
          <Button size="sm" variant="outline">
            <Link href="/project3">See Details ➡️</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectThree;
