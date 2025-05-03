import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AcademicInfo() {
  return (
    <Card className="max-w-3xl mx-auto mt-8 bg-white dark:bg-[#020817]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Academic Information
          <Badge variant="secondary" className="text-xs">
            Undergraduate
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground space-y-2">
        <p>
          <span className="font-medium text-foreground">Name:</span> Sayed
          Zulfikar Mahmud
        </p>
        <p>
          <span className="font-medium text-foreground">Degree:</span> B.Sc. in
          Computer Science and Engineering
        </p>
        <p>
          <span className="font-medium text-foreground">University:</span> Hajee
          Mohammad Danesh Science and Technology University (HSTU)
        </p>
        <p>
          <span className="font-medium text-foreground">Status:</span>{" "}
          Undergraduate Student
        </p>
        <p>
          <span className="font-medium text-foreground">
            Expected Graduation:
          </span>{" "}
          2027
        </p>
        <p>
          <span className="font-medium text-foreground">Department:</span>{" "}
          Computer Science and Engineering
        </p>
      </CardContent>
    </Card>
  );
}
