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

const ProjectTwo = () => {
  return (
    <Card className=" bg-white dark:bg-[#020817] border border-muted-foreground/20 shadow-lg backdrop-blur-sm p-6 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">BestBikes</CardTitle>
        <CardDescription className="text-base mt-2">
          A full-stack e-commerce web app using MERN stack and Shurjopay as
          payment gateway for selling bikes.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tech Stack */}
        <div>
          <h3 className="font-medium mb-2 text-muted-foreground">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React </Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Express</Badge>
            <Badge variant="outline">Ant Design</Badge>
            <Badge variant="outline">React Router DOM</Badge>
            <Badge variant="outline">MongoDB</Badge>
            <Badge variant="outline">Mongoose</Badge>
            <Badge variant="outline">JWT</Badge>
          </div>
        </div>

        {/* Core Features */}
        <div>
          <h3 className="font-medium mb-2 text-muted-foreground">
            Core Features
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>User auth with JWT.</li>
            <li>Add to cart & place orders.</li>
            <li>Admin can manage products & users.</li>
            <li>Cloudinary for image hosting</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className=" md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3 pt-4">
          <Button variant="default" size="sm">
            <Link
              href="https://coruscating-bonbon-3879b6.netlify.app/"
              target="_blank"
            >
              Live Demo
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Link
              href="https://github.com/zulfikar2022/assignment-4-frontend"
              target="_blank"
            >
              Frontend Code
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Link
              href="https://github.com/zulfikar2022/assignment-4-backend"
              target="_blank"
            >
              Backend Code
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Link href="/project2">See Details ➡️</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectTwo;
