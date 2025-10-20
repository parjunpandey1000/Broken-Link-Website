import { bigContainerStyle, smallContainerStyle } from './styles';
import { useMediaQuery } from '@mantine/hooks';
import { FeatureCard } from './FeatureCard';

export const FeaturesCards = () => {
    const bigScreen = useMediaQuery('(min-width: 600px)');

    return (
        <div style={bigScreen ? bigContainerStyle : smallContainerStyle}>
            <FeatureCard icon='iconTarget' title='Precision Scanning' description='Advanced algorithms detect broken links across markdown files, documentation, and code comments with pinpoint accuracy.' />
            <FeatureCard icon='iconFile' title='Automated Reports' description='Generate comprehensive reports with detailed breakdowns, fix suggestions, and priority rankings for efficient maintenance.' />
            <FeatureCard icon='iconArrowGuide' title='GitHub Integration' description='Seamlessly integrate with your GitHub workflow through Actions, webhooks, and automated pull request creation.' />
            <FeatureCard icon='iconBracketsAngle' title='Open Source' description="Completely open source and community-driven. Contribute, customize, and extend to fit your project's needs." />
        </div>
    );
}