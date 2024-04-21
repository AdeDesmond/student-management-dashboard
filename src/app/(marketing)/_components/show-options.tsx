import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

interface ShowOptionsProps {
  path: string;
  content: string;
  label: string;
}

export function ShowOptions({ path, content, label }: ShowOptionsProps) {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Student</TabsTrigger>
        <TabsTrigger value="password">Teacher</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Student</CardTitle>
            <CardDescription>
              Please confirm your status as a student this is you&apos;re board.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>{content}</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" asChild>
              <Link href={path}>{label}</Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Teacher</CardTitle>
            <CardDescription>
              Please confirm your status as a teacher this is you&apos;re board.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>{content}</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" asChild>
              <Link href={path}>{label}</Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

//Please confirm your status as a teacher this is you&apos;re board.
