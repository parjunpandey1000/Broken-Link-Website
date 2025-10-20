import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { featureCardStyles, iconStyle, paragraphStyle, titleStyle } from './styles';
import { IconArrowGuide, IconBracketsAngle, IconFile, IconTarget } from '@tabler/icons-react';
import { theme } from '@/theme';

export const FeatureCard = (
    {icon, title, description}:
    {icon: string, title: string, description: string}
) => {
    return (
        <Card style={featureCardStyles}>
            {getIcon(icon)}
            <Typography variant='title' style={titleStyle}>
                {title}
            </Typography>
            <Typography variant='primary' style={paragraphStyle}>
                {description}
            </Typography>
        </Card>
    );
}

const getIcon = (icon: string) => {
    const color = theme.colors.cyan[4];
    const size = 50;

    switch(icon) {
        case "iconTarget":
            return <IconTarget color={color} style={iconStyle} size={size} />;
        case "iconFile":
            return <IconFile color={color} style={iconStyle} size={size} />;
        case "iconArrowGuide":
            return <IconArrowGuide color={color} style={iconStyle} size={size} />;
        case "iconBracketsAngle":
            return <IconBracketsAngle color={color} style={iconStyle} size={size} />;
        default:
            return <IconTarget color={color} style={iconStyle} size={size} />;
    }
}