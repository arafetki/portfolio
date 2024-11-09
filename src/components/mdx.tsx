import { useMDXComponent } from "@content-collections/mdx/react";
import { components } from "@/components/mdx-components";

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
