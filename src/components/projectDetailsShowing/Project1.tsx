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

const ProjectOne = () => {
  return (
    <Card className=" bg-white dark:bg-[#020817] border border-muted-foreground/20 shadow-lg backdrop-blur-sm p-6 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">HomeHunt</CardTitle>
        <CardDescription className="text-base mt-2">
          A full-stack web application for renting homes. As well as for
          managing homes from the landlords endpoints. With stripe payment
          gateway integration.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tech Stack */}
        <div>
          <h3 className="font-medium mb-2 text-muted-foreground">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React 18</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Node.js 18</Badge>
            <Badge variant="outline">Express</Badge>
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
            <li>
              Post rental properties with images and detailed information.
            </li>
            <li>Search for homes by location, price, and bedrooms.</li>
            <li>
              Tenants can request to rent a house; landlords can approve or
              reject requests.
            </li>
            <li>
              Tenants can request to rent a house; landlords can approve or
              reject requests.
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Link href="https://home-hunt-frontend.vercel.app/" target="_blank">
            <Button size="sm">Live Demo</Button>
          </Link>
          <Link
            href="https://github.com/zulfikar2022/home-hunt-frontend"
            target="_blank"
          >
            <Button size="sm" variant="outline">
              Frontend Code
            </Button>
          </Link>
          <Link
            href="https://github.com/zulfikar2022/home-hunt-backend"
            target="_blank"
          >
            <Button size="sm" variant="outline">
              Backend Code
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectOne;
