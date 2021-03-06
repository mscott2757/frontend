// Information Feed Component = holds one or more information feeds displayed on the right side
// of the MainDashboard Container

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
// Internal Modules
import GlobalTheme from '../styledComponents/GlobalTheme';

// #toFix: make components responsive
// #toDo: decide between show more button that extends feed (limits other features) or simple left and right
// arrow
// #toDo: button that refreshes feed? how to make it automatic? Firebase could still be v useful here.

const GlobalFeed = styled.div`
    height: 300px;
    width: 80%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    margin-top: ${ props => props.GlobalTheme.dashboardStyling.marginTop };
    border-radius: 5px;
    border-style: solid;
    border-color: #B0B0B0;
    border-width: 1px;
    padding: 10px;
`;

const FeedHeader = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: black;
    text-align: left;
    background-color: transparent;
    height: 25px;
`;

const FeedText = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    height: 96%;
    width: 100%;
    overflow-y: scroll;
`;

// #toDo: needs to be a link that links to the website article itself

const FeedArticle = styled.div`
    width: 100%:
    height: auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
`;

const ArticleTitle = styled.p`
    font-size: 11px;
    color: black;
    height: auto;
    width: 100%;
    background-color: transparent;
    font-weight: 600;
    line-height: 12px;
    text-align: left;
    margin-bottom: 0px;
`;

const ArticleMetaData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: auto;
`;

const TimeMetaData = styled.p`
    display: inline-block;
    color: black;
    font-size: 10px;
    margin-top: 4px;
    margin-bottom: 3px;
`

const SourceMetaData = styled(TimeMetaData)`
    font-style: italic;
    color: grey
`


class InformationFeedComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            // Empty for now
            globalFeed: [
                {title: 'Off to the cafe: Sweden is outlier in virus restrictions', timestamp: '3 hr', source: 'BBC'},
                {title: 'Iran defends virus responses as Syria reports first death', timestamp: '6 hr', source: 'AP'},
                {title: 'North Korea test fires missiles amid worries about outbreak', timestamp: '9 hr', source: 'Al Jazeera'},
                {title: 'Indian authorities send buses to take unemployed to villages', timestamp: '1 d', source: 'Indiatimes'},
                {title: 'South Africa has first death as lockdown begins', timestamp: '1 d', source: 'BBC'},
            ]
        }
    }

    // #important #toChange: once hte InformationFeedComponent gets "upgraded" to hold both GlobalFeedComponent
    // and NationalFeedComponent (not created yet), then create Wrapper that will hold the two components and set
    // the margin of that to be the DashboardStyling margin
    // or set it to the RightSideContainer? Make it consistent. Currently margin is set to the first child component.
    render() {
        return (
            <GlobalFeed GlobalTheme={GlobalTheme}>
                <FeedHeader> Global News </FeedHeader>
                <FeedText> 
                    {this.state.globalFeed.map((articleObject, index) => {
                        return <FeedArticle key={index}>
                                <ArticleTitle> {articleObject.title} </ArticleTitle>
                                <ArticleMetaData>
                                    <TimeMetaData>  {articleObject.timestamp} -   </TimeMetaData>
                                    <SourceMetaData> {articleObject.source} </SourceMetaData>
                                </ArticleMetaData>
                                </FeedArticle>
                    })}
                </FeedText>
            </GlobalFeed>
        )
    }
}

export default InformationFeedComponent;
