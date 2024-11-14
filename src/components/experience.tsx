import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Bar from "@/components/bar";

export default function Experience() {
  return (
    <section id="experience" className="space-y-4 py-16">
      <div className="text-right">
        <Bar />
        <h1 className="bg-gradient-green-primary bg-clip-text font-mono text-4xl font-extrabold text-transparent">
          Experience
        </h1>
      </div>
      <div className="flex justify-center py-8">
        <Tabs defaultValue="work" className="w-[700px]">
          <TabsList className="grid w-full grid-cols-2 bg-stone-200 dark:bg-stone-900">
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="work" className="flex justify-center">
            <div>Work / Internships</div>
          </TabsContent>
          <TabsContent value="education" className="flex justify-center">
            <div>Education history</div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
