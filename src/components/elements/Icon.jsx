const Icon = (props) => {
    // eslint-disable-next-line react/prop-types
    const { icon } = props;
    const TheIcon = icon;
    return <TheIcon {...props} />;
};

export default Icon;
