import SanityBlockContent from '@sanity/block-content-to-react';

type BlockNode = {
  language?: string;
  code?: string;
};

type Block = {
  node: BlockNode;
};

type Props = {
  blocks: Block[] | any[];
};

const serializers = {
  types: {
    code: ({ node }: Block) => (
      <pre data-language={node.language}>
        <code>{node.code}</code>
      </pre>
    ),
  },
};

export function BlockContent({ blocks }: Props) {
  return <SanityBlockContent blocks={blocks} serializers={serializers} />;
}
