import { BaseComponent } from "@src/theme/BaseComponent";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";

function HomeScreen() {
  return (
    <BaseComponent tag="main">
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h2" variant="display1">
            Últimas atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </BaseComponent>
  );
}

export default HomeScreen;
