import React from 'react'
import { Card } from 'react-bootstrap'
import ContentLoader from "react-content-loader"

export const ProjectCardLoading = ({uniqueKey}) => {
    return (
        <Card className="project-card ">
            
            <Card.Body>
                <ContentLoader
                    uniqueKey = {uniqueKey}
                    speed={2}
                    width={380}
                    height={160}
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    style={{ width: '100%' }}
                >   
                    <rect x="0" y="0" rx="3" ry="3"  width="200" height="10" />
                    <rect x="0" y="20" rx="3" ry="3"  width="120" height="10" />
                    <rect x="0" y="55" rx="3" ry="3" width="270" height="8" />
                    <rect x="0" y="70" rx="3" ry="3" width="270" height="8" />
                    <rect x="0" y="85" rx="3" ry="3" width="270" height="8" />
                </ContentLoader>
            </Card.Body>
        </Card>
    )
}
