import { useMDXComponent } from '@content-collections/mdx/react';
import { components } from '@/components/mdx-components';

type MdxProps = {
    code: string
}

export default function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return (
        <div className="mdx">
          <Component components={components}/>
        </div>
    );
}