import Box from "@src/components/Box";
import theme from "@src/theme/theme";

function HomeScreen() {
    return (
        <Box
            tag="main"
            styleSheet={{
                fontFamily: theme.typography.fontFamily
            }}>Oi</Box>
    );
}

export default HomeScreen;