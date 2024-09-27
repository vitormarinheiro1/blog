import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box
    >
      <Image
        styleSheet={{
          width: "128px",
          height: "128px",
          borderRadius: "100%",
        }}
        src="https://github.com/vitormarinheiro1.png"
        alt="Imagem de perfil"
      />
      <Icon name="linkedin" />
      <Link href="https://github.com/vitormarinheiro1">
        <Icon name="github" />
      </Link>
      <Icon name="instagram" />
      <Text>Feed Header</Text>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
