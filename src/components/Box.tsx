interface StyleSheet {
    fontFamily: string;
}

interface BoxProps {
    //Resolver esse any depois
    tag: any;
    children: React.ReactNode;
    styleSheet: StyleSheet;
}

function Box({ styleSheet, children, tag }: BoxProps) {
    const Tag = tag || 'div'
    return (
        <Tag style={styleSheet}>
            {children}
        </Tag>
    );
}

export default Box;