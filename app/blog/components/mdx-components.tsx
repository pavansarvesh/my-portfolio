import { useMDXComponent } from 'next-contentlayer2/hooks';

const components = {};

interface MdxProps {
  code: string;
}
export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div>
      <Component components={components} />
    </div>
  );
}
