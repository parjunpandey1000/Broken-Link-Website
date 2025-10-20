import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { featureCardStyles, iconStyle, paragraphStyle, titleStyle } from './styles';
import { IconArrowGuide, IconBracketsAngle, IconFile, IconTarget } from '@tabler/icons-react';

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
    switch(icon) {
        case "iconTarget":
            return <IconTarget color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />;
        case "iconFile":
            return <IconFile color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />;
        case "iconArrowGuide":
            return <IconArrowGuide color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />;
        case "iconBracketsAngle":
            return <IconBracketsAngle color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />;
        default:
            return <IconTarget color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />;
    }
}