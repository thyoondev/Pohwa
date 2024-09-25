import { PROJECT_LIST } from "@/entities/projectList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { ArrowDownCircle } from "lucide-react";
import ReactPlayer from "react-player";

const Work = () => {
  return (
    <div>
      <div className="h-[33.3dvh] flex items-center px-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-9xl align-middle">
          Projects All
          <ArrowDownCircle className="inline-block ml-4 w-9 h-9 lg:w-32 lg:h-32" />
        </h1>
      </div>
      {PROJECT_LIST.map((project) => (
        <Card className="w-full border-x-0" key={project.id}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="h-[40dvh] flex justify-center">
            <ReactPlayer
              url={project.videoUrl}
              loop
              controls={true}
              height={"100%"}
              width={"auto"}
              //   background={true}
              playsinline={true}
              className="bg-video"
              fallback={
                <div className="bg-[url('https://pohwa.xyz/logo.png')]" />
              }
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload noplaybackrate",
                  },
                },
              }}
            />
          </CardContent>
          {/* <CardFooter className="flex justify-end">
            <Button>Deploy</Button>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );
};

export default Work;
